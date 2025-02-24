import { z } from 'zod';

// Helper function to unwrap Zod wrappers like `default()`, `optional()`, etc.
function unwrapZodSchema(schema: z.ZodTypeAny): z.ZodTypeAny {
  while (
    schema instanceof z.ZodOptional ||
    schema instanceof z.ZodNullable ||
    schema instanceof z.ZodDefault ||
    schema instanceof z.ZodEffects || // Handles refinements
    schema instanceof z.ZodCatch ||
    schema instanceof z.ZodLazy
  ) {
    //@ts-expect-error
    schema = schema._def.innerType;
  }
  return schema;
}

// Check if the schema is a ZodObject (after unwrapping)
function isZodObject(schema: z.ZodTypeAny): schema is z.AnyZodObject {
  return unwrapZodSchema(schema) instanceof z.ZodObject;
}

// Check if the schema is a ZodArray (after unwrapping)
function isZodArray(schema: z.ZodTypeAny): schema is z.ZodArray<any> {
  return unwrapZodSchema(schema) instanceof z.ZodArray;
}

// Pick a property from a Zod object (after unwrapping)
function pickObject(schema: z.ZodTypeAny, path: string): z.ZodTypeAny {
  schema = unwrapZodSchema(schema);
  if (!isZodObject(schema)) throw new Error('Not a Zod object');

  const newSchema = schema.shape?.[path];
  if (!newSchema)
    throw new Error(
      `${path} does not exist on schema with keys: ${Object.keys(schema.shape)}`,
    );

  return newSchema;
}

// Get the element type from a Zod array (after unwrapping)
function pickArray(schema: z.ZodTypeAny): z.ZodTypeAny {
  schema = unwrapZodSchema(schema);
  if (!isZodArray(schema)) throw new Error('Not a Zod Array');

  return schema.element;
}

// Deeply pick a property path from a Zod schema
export function zodDeepPick(schema: z.ZodTypeAny, propertyPath: string): z.ZodTypeAny {
  if (propertyPath === '') return schema;

  const numberRegex = /\[\d+\]/g;
  const arrayIndex = propertyPath.search(numberRegex);
  const objectIndex = propertyPath.indexOf('.');

  const matchedArray = arrayIndex !== -1;
  const matchedObject = objectIndex !== -1;

  if (
    (matchedArray && matchedObject && arrayIndex < objectIndex) ||
    (matchedArray && !matchedObject)
  ) {
    const arraySplit = propertyPath.split(numberRegex);
    const restArray = arraySplit.slice(1).join('[0]');

    if (arrayIndex !== 0) {
      return zodDeepPick(pickObject(schema, arraySplit[0]), `[0]${restArray}`);
    }

    return zodDeepPick(
      pickArray(schema),
      restArray.charAt(0) === '.' ? restArray.slice(1) : restArray,
    );
  }

  if (matchedObject) {
    const objectSplit = propertyPath.split('.');
    const restObject = objectSplit.slice(1).join('.');

    return zodDeepPick(pickObject(schema, objectSplit[0]), restObject);
  }

  return pickObject(schema, propertyPath);
}
