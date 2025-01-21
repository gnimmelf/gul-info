import { z } from 'zod';

/**
 * DTO Model decorator to define property getter for each prop in passed `schema`.
 * Props will be retrieved from the private `data`
 * @param schema zod schema
 * @returns class instance with getters defined
 */
export function ExposeDataAsSchemaProps<S extends z.ZodObject<any>>(schema: S) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T): T {
    const schemaKeys = Object.keys(schema.shape);

    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);

        schemaKeys.forEach((key) => {
          Object.defineProperty(this, key, {
            get() {
              return this.data[key];
            },
          });
        });
      }
    };
  };
}
