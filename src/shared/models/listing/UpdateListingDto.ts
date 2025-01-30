import { z } from 'zod';
import * as fields from '~/shared/zod/schemas';
import { parseWithDefaults } from '~/shared/zod/helpers';
import { ListingSchema, LinkShema } from './Listing';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const UpdateListingDtoSchema = ListingSchema.extend({
  title: ListingSchema.shape.title.min(3).max(70),
  description: ListingSchema.shape.description.min(15).max(150),
  address: fields.address,
  zip: fields.zip,
  muncipiality: ListingSchema.shape.muncipiality,
  phone: fields.phone,
  email: fields.email,
  // TODO! Tags
  tags: z.array(z.any()).min(1).default([]),
  // Sub-schemas
  links: z.array(LinkShema).default([]),
});

export type UpdateListingDtoSchemaType = z.infer<typeof UpdateListingDtoSchema>;

// Add Schema props type definitions
export interface Listing extends UpdateListingDtoSchemaType {}

@ExposeDataAsSchemaProps(UpdateListingDtoSchema)
export class UpdateListingDto {
  public data: UpdateListingDtoSchemaType;

  constructor(data: UpdateListingDtoSchemaType) {
    this.data = data;
    Object.freeze(this.data)
  }

  static from(data: Partial<UpdateListingDtoSchemaType>): UpdateListingDto {
    const parsedData = parseWithDefaults(UpdateListingDtoSchema, data);
    return new UpdateListingDto(parsedData);
  }
}
