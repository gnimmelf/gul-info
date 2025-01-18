export class _State<TState> {
  private _state: TState;

  constructor(initialState: Partial<TState>) {
    this._state = initialState as TState;
  }

  public state(): TState {
    console.log('state()', this._state);
    return { ...this._state };
  }

  public setState(value: Partial<TState> | ((prev: TState) => TState)): void {
    this._state =
      typeof value === 'function'
        ? (value as (prev: Partial<TState>) => TState)(this._state)
        : {
            ...this._state,
            ...value,
          };
  }
}
