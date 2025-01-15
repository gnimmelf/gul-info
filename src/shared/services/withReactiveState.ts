import { _ServiceState } from '../../core/services/__ServiceState';

type StateGetter<T> = () => T;
type StateSetter<T> = (value: T | ((prev: T) => T)) => void;
type StateCreator<T> = (initialState: T) => [StateGetter<T>, StateSetter<T>];

export const withReactiveState = <
  TService extends _ServiceState<TState>,
  TState,
>(
  service: TService,
  stateCreator: StateCreator<TState>,
): TService => {
  const [state, setState] = stateCreator(service.state());

  // Wrap the service's setState method to propagate changes to the reactive system
  const originalSetState = service.setState.bind(service);

  //@ts-expect-error
  service.setState = (value) => {
    originalSetState(value); // Update the service's internal state
    setState(service.state()); // Sync the reactive state with the updated service state
  };

  const proxy = new Proxy(service, {
    get(target, prop) {
      if (prop === 'state') {
        return state;
      }
      // Delegate to the original target for other properties
      return (target as any)[prop];
    },
    set(target, prop, value) {
      // Prevent `state` and `setState` from being overwritten
      if (prop === 'state' || prop === 'setState') {
        throw new Error(`Cannot overwrite ${String(prop)}.`);
      }
      // Allow other properties to be set as usual
      (target as any)[prop] = value;
      return true;
    },
  });

  return proxy as MergeServiceState<TService, _ServiceState<TState>>;
};

export type MergeServiceState<ServiceClass, TState> = ServiceClass & _ServiceState<TState>;
