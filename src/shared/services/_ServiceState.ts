export class _ServiceState<TState> {
  private _state: Partial<TState>;

  constructor(initialState: Partial<TState>) {
    this._state = initialState;
  }

  public state(): Partial<TState> {
    return this._state;
  }

  public setState(
    value: Partial<TState> | ((prev: Partial<TState>) => Partial<TState>),
  ): void {
    this._state =
      typeof value === 'function'
        ? (value as (prev: Partial<TState>) => Partial<TState>)(this._state)
        : {
            ...this._state,
            ...value,
          };
  }
}
