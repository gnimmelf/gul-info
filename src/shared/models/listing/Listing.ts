import { z } from 'zod';
import { ExposeDataSchemaAsProps } from '~/shared/lib/ExposeDataSchemaAsProps';
import { parseWithDefaults } from '~/shared/zod/helpers';

const linkSchema = z.object({
  href: z.string().url(),
});

const dataSchema = z
  .object({
    id: z.any(),
    owner: z.any(),
    isActive: z.boolean(),
    title: z.string(),
    description: z.string(),
    address: z.string(),
    zip: z.string(),
    muncipiality: z.string(),
    phone: z.string(),
    email: z.string(),
    links: z.array(linkSchema),
    tags: z.array(z.any()),
  })
  .required();

type DataSchemaType = z.infer<typeof dataSchema>;

// Class namespace exports
export namespace Listing {
  export type SchemaType = DataSchemaType;
}

// Extend class with schema definitions
export interface Listing extends DataSchemaType {}

@ExposeDataSchemaAsProps(dataSchema)
export class Listing {
  public static schema = dataSchema;
  public data: DataSchemaType;

  constructor(data: DataSchemaType) {
    this.data = data;
  }

  static from(data: Partial<DataSchemaType>): Listing {
    const parsedData = parseWithDefaults(dataSchema, data);
    return new Listing(parsedData);
  }
}