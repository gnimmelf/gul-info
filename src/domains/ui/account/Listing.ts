import { z } from 'zod';
import { _State } from '~/shared/lib/_State';

export const ListingSchema = z.object({
  id: z.string(),
  owner: z.string(),
  title: z.string(),
  description: z.string(),
  address: z.string(),
  zip: z.string().regex(/^\d{4}$/),
  muncipiality: z.string(),
  phone: z.string(),
  email: z.string().email(),
  links: z.array(
    z.object({
      href: z.string(),
    }),
  )
});

export type ListingSchemaType = z.infer<typeof ListingSchema>;

export class Listing extends _State<ListingSchemaType> {

  constructor(data: ListingSchemaType) {
    super(data);
  }

  static from(data: unknown): Listing {
    const parsedData = ListingSchema.parse(data);
    return new Listing(parsedData);
  }

}

export interface Listing extends ListingSchemaType {}
