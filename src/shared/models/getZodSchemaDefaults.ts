import { z } from 'zod';

function zodGetDefaults<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
): {
  [K in keyof T as T[K] extends z.ZodDefault<infer U> ? K : never]: z.infer<
    T[K]
  >;
} {
  return Object.fromEntries(
    Object.entries(schema.shape)
      .map(([k, v]) => [
        k,
        v instanceof z.ZodDefault ? v._def.defaultValue() : undefined,
      ])
      .filter(([k, v]) => v !== undefined),
  );
}

/**
 * Get a types object with defaults or undefined from a zod-schema
 * See: https://github.com/colinhacks/zod/discussions/1953
 * @param schema
 * @returns
 */
export function getZodSchemaDefaults<T extends z.ZodTypeAny>(
  schema: z.AnyZodObject | z.ZodEffects<any>,
): z.infer<T> {
  // Check if it's a ZodEffect
  if (schema instanceof z.ZodEffects) {
    // Check if it's a recursive ZodEffect
    if (schema.innerType() instanceof z.ZodEffects)
      return zodGetDefaults(schema.innerType());
    // return schema inner shape as a fresh zodObject
    return zodGetDefaults(z.ZodObject.create(schema.innerType().shape));
  }

  function getDefaultValue(schema: z.ZodTypeAny): unknown {
    if (schema instanceof z.ZodDefault) return schema._def.defaultValue();
    // return an empty array if it is
    if (schema instanceof z.ZodArray) return [];
    // return an empty string if it is
    if (schema instanceof z.ZodString) return '';
    // return an content of object recursivly
    if (schema instanceof z.ZodObject) return zodGetDefaults(schema);

    if (!('innerType' in schema._def)) return undefined;
    return getDefaultValue(schema._def.innerType);
  }

  return Object.fromEntries(
    Object.entries(schema.shape).map(([key, value]) => {
      //@ts-expect-error
      return [key, getDefaultValue(value)];
    }),
  );
}
