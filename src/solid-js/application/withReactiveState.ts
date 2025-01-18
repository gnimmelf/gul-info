import { createSignal } from 'solid-js';
import { _State } from '~/shared/application/_State';

/**
 * Wraps `instance.state()` and `instance.setState()` with a reactive signal().
 * TODO! Is a store better?
 * @param instance instance that implements `state()` and setState()`
 * @returns instance proxy
 */
export const withReactiveState = <TInstance extends _State<TState>, TState>(
  instance: TInstance,
): TInstance => {
  if (!(instance instanceof _State)) {
    throw new Error('Passed instanc must extend `_State`');
  }

  // `createSignal` for SolidJs, `useState` for React. Vue?
  const [state, setState] = createSignal<TState>(instance.state());

  // Wrap the instance's setState method to propagate changes to the reactive system
  const originalSetState = instance.setState.bind(instance);

  const proxy = new Proxy(instance, {
    get(target, prop) {
      if (prop === 'state') {
        return state;
      }
      if (prop === "setState" && typeof originalSetState === "function") {
        return (value: Partial<TState> | ((prev: TState) => TState)) => {
          originalSetState(value);
          //@ts-expect-error
          setState(instance.state());
        };
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

  return proxy as MergeServiceState<TInstance, _State<TState>>;
};

export type MergeServiceState<ServiceClass, TState> = ServiceClass &
  _State<TState>;
