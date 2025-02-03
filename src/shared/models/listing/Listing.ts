import { z } from 'zod';
import { _State } from '~/shared/lib/_State';
import { parseWithDefaults } from '~/shared/zod/helpers';

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
  // TODO! Tags
  tags: z.array(z.any()),
  // SubSchemas
  links: z.array(LinkShema),
});

export type ListingSchemaType = z.infer<typeof ListingSchema>;

export class Listing extends _State<ListingSchemaType> {
  constructor(data: ListingSchemaType) {
    super(data);
  }

  static from(data: Partial<ListingSchemaType>): Listing {
    const parsedData = parseWithDefaults(ListingSchema, data);
    return new Listing(parsedData);
  }
}
