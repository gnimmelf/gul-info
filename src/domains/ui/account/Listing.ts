import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const ListingSchema = z.object({
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
  )
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
