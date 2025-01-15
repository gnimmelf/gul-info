import { z } from 'zod';
import { TagSchema } from './Tag';
import { ExposeDataAsSchemaProps } from '~/shared/models/ExposeDataAsSchemaProps';

export const ListingSchema = z.object({
  isActive: z.boolean(),
  title: z.string(),
  description: z.string(),
  address: z.string(),
  muncipiality: z.string(),
  zip: z.string().regex(/^\d{4}$/),
  phone: z.string(),
  email: z.string().email(),
  links: z.array(
    z.object({
      href: z.string(),
    }),
  ),
  tags: z.array(TagSchema.omit({ usageCount: true })),
});

export type ListingSchemaType = z.infer<typeof ListingSchema>;

@ExposeDataAsSchemaProps(ListingSchema)
export class Listing {
  private data;

  constructor(data: ListingSchemaType) {
    this.data = data;
  }

  static from(data: unknown): Listing {
    const parsedData = ListingSchema.parse(data);
    return new Listing(parsedData);
  }
}

export interface Listing extends ListingSchemaType {}
