import { Accessor, Resource, Setter, Signal } from 'solid-js';
import { StateGetter, StateSetter } from '../types';

type ConfigShape = {
  resources?: Record<string, Resource<any>>;
  signals?: Record<string, Setter<any>>;
  state?: StateGetter<any>;
  setState?: StateSetter<any>;
} & {
  [key: string]: ((...args: any[]) => any | Promise<any>) | Record<string, Resource<any>> | undefined;
};

export const checkAdapterReturnType = <T extends ConfigShape>(config: T): T => {
  return config; // Ensure `config` matches the `ConfigShape`
};
