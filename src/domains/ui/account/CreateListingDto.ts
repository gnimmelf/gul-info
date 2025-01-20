import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const CreateListingDtoSchema = z.object({
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

export type CreateListingDtoSchemaType = z.infer<typeof CreateListingDtoSchema>;

@ExposeDataAsSchemaProps(CreateListingDtoSchema)
export class Listing {
  private data: CreateListingDtoSchemaType;

  constructor(data: CreateListingDtoSchemaType) {
    this.data = data
  }

  static from(data: unknown): Listing {
    const parsedData = CreateListingDtoSchema.parse(data);
    return new Listing(parsedData);
  }
}

export interface Listing extends CreateListingDtoSchemaType {}
