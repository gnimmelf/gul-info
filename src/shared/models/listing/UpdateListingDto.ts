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
  tags: ListingSchema.shape.tags.min(1).default([]),
  links: ListingSchema.shape.links.default([]),
});

export type UpdateListingDtoSchemaType = z.infer<typeof UpdateListingDtoSchema>;

// Add Schema props type definitions
export interface UpdateListingDto extends UpdateListingDtoSchemaType {}

@ExposeDataAsSchemaProps(UpdateListingDtoSchema)
export class UpdateListingDto {
  public schema = UpdateListingDtoSchema;
  public data: UpdateListingDtoSchemaType;

  constructor(data: UpdateListingDtoSchemaType) {
    this.data = data;
    Object.freeze(this.data);
  }

  static from(data: Partial<UpdateListingDtoSchemaType>): UpdateListingDto {
    const parsedData = parseWithDefaults(UpdateListingDtoSchema, data);
    return new UpdateListingDto(parsedData);
  }
}
