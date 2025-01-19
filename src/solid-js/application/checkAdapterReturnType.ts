import { Resource, Setter } from 'solid-js';
import { StateGetter, StateSetter } from '~/shared/application/_State';

type ConfigShape = {
  resources?: Record<string, Resource<any>>;
  // Only setters for signals; use to trigger resources with data
  signals?: Record<string, Setter<any>>;
  state?: StateGetter<any>;
  setState?: StateSetter<any>;
} & {
  [key: string]: ((...args: any[]) => any | Promise<any>) | Record<string, Resource<any>> | undefined;
};

export const checkAdapterReturnType = <T extends ConfigShape>(config: T): T => {
  return config; // Ensure `config` matches the `ConfigShape`
};
