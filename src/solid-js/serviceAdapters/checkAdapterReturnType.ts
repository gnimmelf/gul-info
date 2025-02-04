import { Resource, Setter } from 'solid-js';
import { StateGetter, StateSetter } from '~/shared/lib/_WithState';

type AdapterShape = {
  resources?: Record<string, Resource<any>>;
} & {
  [key: string]:
    | ((...args: any[]) => any | Promise<any>)
    | Record<string, Resource<any>>
    | undefined;
};

export const checkAdapterReturnType = <T extends AdapterShape>(config: T): T => {
  return config; // Ensure `config` matches the `AdapterShape`
};
