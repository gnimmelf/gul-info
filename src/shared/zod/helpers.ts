import { z, ZodSchema } from 'zod';
import { init } from 'zod-empty';

export { zodDeepPick } from './zodDeepPick';

export const mergeWithDefaults = (schema: ZodSchema, data: any) => {
  const defaults = init(schema);
  const mergedData = {
    ...defaults,
    ...data,
  };
  return mergedData;
};

export const parseWithDefaults = (schema: ZodSchema, data: any) => {
  const mergedData = mergeWithDefaults(schema, data);
  return schema.parse(mergedData);
};

/**
 * Console logs a warning if loaded data does not match schema definition
 * @param Schema zodschema
 * @param values schema values
 * @param flatten boolean to flatten error
 */
export const checkLoadedData = (
  Schema: ZodSchema,
  values: z.infer<typeof Schema>,
  flatten?: boolean,
) => {
  const res = Schema.safeParse(values);
  if (!res.success) {
    console.warn('Incompatible data loaded:', flatten ? res.error.flatten() : res.error);
  }
};
