import { z } from 'zod';

export function ExposeSchemaProps<S extends z.ZodObject<any>>(schema: S) {
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
            set(value) {
              const fieldSchema = schema.shape[key];
              fieldSchema.parse(value); // Validate before setting
              this.data[key] = value;
            },
          });
        });
      }
    };
  };
}
