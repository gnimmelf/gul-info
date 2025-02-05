import { Resource, Setter } from 'solid-js';

type AdapterShape = {
  resources?: Record<string, Resource<any>>;
} & {
  [key: string]: any;
};

export const checkAdapterReturnType = <T extends AdapterShape>(shape: T): T => {
  return shape; // Ensure `shape` matches the `AdapterShape`
};
