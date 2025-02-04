export type StateGetter<TState> = () => TState;
export type StateSetter<TState> = (
  value: Partial<TState> | ((prev: TState) => TState),
) => void;

interface IState<TState> {
  state: StateGetter<TState>;
  setState: StateSetter<TState>;
}

/**
 * Extends a class with a state setter and getter.
 * Classes extended with _WithState should be proxied with reactive signals.
 */
export abstract class _WithState<TState> implements IState<TState> {
  private _state: TState;

  constructor(initialState: Partial<TState>) {
    this._state = initialState as TState;
  }

  public state: StateGetter<TState> = () => {
    return { ...this._state };
  };

  public setState: StateSetter<TState> = (value) => {
    this._state =
      typeof value === 'function'
        ? value(this._state)
        : {
            ...this._state,
            ...value,
          };
  };
}
