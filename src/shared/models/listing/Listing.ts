import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';
import { parseWithDefaults } from '~/shared/zod/helpers';
import { TagViewSchema } from '../TagViewModel';

export const LinkShema = z.object({
  href: z.string().url(),
});

export const ListingSchema = z.object({
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
  links: z.array(LinkShema),
  tags: z.array(z.any()),
}).required();

export type ListingSchemaType = z.infer<typeof ListingSchema>;

// Add Schema props type definitions
export interface Listing extends ListingSchemaType {}

@ExposeDataAsSchemaProps(ListingSchema)
export class Listing {
  public schema = ListingSchema;
  public data: ListingSchemaType;

  constructor(data: ListingSchemaType) {
    this.data = data;
    Object.freeze(this.data);
  }

  static from(data: Partial<ListingSchemaType>): Listing {
    const parsedData = parseWithDefaults(ListingSchema, data);
    return new Listing(parsedData);
  }
}
