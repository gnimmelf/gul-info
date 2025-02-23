import { z } from 'zod';

/**
 * Model decorator to define property getter for each prop in passed `schema`.
 * Props will be retrieved from the private `data`
 * @param schema zod schema
 * @returns class instance with getters defined
 */
export function ExposeDataSchemaAsProps<S extends z.ZodObject<any>>(schema: S) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T): T {
    const schemaKeys = Object.keys(schema.shape);

    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);

        schemaKeys.forEach((key) => {
          if (!hasGetter(this, key)) {
            Object.defineProperty(this, key, {
              get() {
                return this.hasOwnProp || this.data[key];
              },
            });
          }
        });
      }
    };
  };
}

function hasGetter(obj: any, key: string) {
  let currentObj = obj;
  while (currentObj !== null) {
    const descriptor = Object.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor) {
      return typeof descriptor.get === 'function';
    }
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return false;
}
