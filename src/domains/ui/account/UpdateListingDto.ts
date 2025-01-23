import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const UpdateListingDtoSchema = z.object({
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
  ),
});

export type UpdateListingDtoSchemaType = z.infer<typeof UpdateListingDtoSchema>;
// Add Schema props type definitions
export interface Listing extends UpdateListingDtoSchemaType {}

@ExposeDataAsSchemaProps(UpdateListingDtoSchema)
export class Listing {
  private data: UpdateListingDtoSchemaType;

  constructor(data: UpdateListingDtoSchemaType) {
    this.data = data;
  }

  static from(data: unknown): Listing {
    const parsedData = UpdateListingDtoSchema.parse(data);
    return new Listing(parsedData);
  }
}
