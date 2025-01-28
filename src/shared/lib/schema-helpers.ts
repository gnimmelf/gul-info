import { z, ZodSchema } from 'zod';
import { init } from 'zod-empty';

const reName = new RegExp(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u);
const rePhone = new RegExp(/^([\+][1-9]{2})?[ ]?([0-9 ]{8})$/);
const reStreet = new RegExp(/^[\p{L}'][ \p{L}\p{N}'-,]{8,}$/u);
const reZip = new RegExp(/^\d{4}$/);

export const email = z.string().trim().email('Must be a valid email address');
export const name = z.string().trim().regex(reName, 'Must be a valid name');

export const address = z
  .string()
  .trim()
  .regex(reStreet, 'Must be a valid street address');

export const zip = z.string().trim().regex(reZip, 'Must be a valid zip code');

export const phone = z.preprocess(
  (val: any) => val?.split(' ').join(''),
  z.string().trim().regex(rePhone, 'Must be a valid phone number'),
);

export const mergeWithDefaults = (schema: ZodSchema, data: any) => {
  const defaults = init(schema);
  const mergedData = {
    ...defaults,
    ...data,
  };
  console.log(mergedData);
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
    console.warn(
      'Incompatible data loaded:',
      flatten ? res.error.flatten() : res.error,
    );
  }
};
