import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';
import { UpdateListingDtoSchema } from './UpdateListingDto';
import { mergeWithDefaults } from '~/shared/zod/helpers';

export const CreateListingDtoSchema = UpdateListingDtoSchema.extend({
  isActive: UpdateListingDtoSchema.shape.isActive.default(true),
  title: UpdateListingDtoSchema.shape.title.default(''),
  description: UpdateListingDtoSchema.shape.description.default(''),
  address: UpdateListingDtoSchema.shape.address.default(''),
  zip: UpdateListingDtoSchema.shape.zip.default(''),
  muncipiality: UpdateListingDtoSchema.shape.muncipiality.default(''),
  phone: UpdateListingDtoSchema.shape.phone.default(''),
  email: UpdateListingDtoSchema.shape.email.default(''),
  // TODO! Tags
  tags: UpdateListingDtoSchema.shape.tags,
  // Sub-schemas
  links: UpdateListingDtoSchema.shape.links,
}).omit({
  id: true,
  owner: true,
});

export type CreateListingDtoSchemaType = z.infer<typeof CreateListingDtoSchema>;

// Add Schema props type definitions
export interface CreateListingDto extends CreateListingDtoSchemaType {}

@ExposeDataAsSchemaProps(CreateListingDtoSchema)
export class CreateListingDto {
  public data: CreateListingDtoSchemaType;

  constructor(data: CreateListingDtoSchemaType) {
    this.data = data;
    Object.freeze(this.data);
  }

  static from(data: Partial<CreateListingDtoSchemaType>): CreateListingDto {
    const parsedData = mergeWithDefaults(CreateListingDtoSchema, data);
    return new CreateListingDto(parsedData);
  }
}
