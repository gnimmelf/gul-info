import { Resource, Signal } from 'solid-js';
import { StateGetter, StateSetter } from '../types';

type ConfigShape = {
  resources?: Record<string, Resource<any>>;
  signals?: Record<string, Signal<any>>;
  state?: StateGetter<any>;
  setState?: StateSetter<any>;
};

export const checkAdapterReturnType = <T extends ConfigShape>(config: T): T => {
  return config; // Ensure `config` matches the `ConfigShape`
};
