import { z } from 'zod';
import { _State } from '~/shared/lib/_State';

export const LinkShema = z.object({
  href: z.string(),
});

export const ListingSchema = z.object({
  id: z.any(),
  owner: z.any(),
  title: z.string(),
  description: z.string(),
  address: z.string(),
  zip: z.string().regex(/^\d{4}$/),
  muncipiality: z.string(),
  phone: z.string(),
  email: z.string().email(),
  tags: z.array(z.any()),
  // SubSchemas
  links: z.array(LinkShema),
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

  validate(key: string, value: any) {
    return ListingSchema.shape.zip.safeParse(value)
  }
}
