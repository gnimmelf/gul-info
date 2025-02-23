import { z } from 'zod';
import { ExposeDataSchemaAsProps } from '~/shared/lib/ExposeDataSchemaAsProps';
import { UpdateListingDto } from './UpdateListingDto';
import { mergeWithDefaults } from '~/shared/zod/helpers';

const dataSchema = UpdateListingDto.schema.extend({
  isActive: UpdateListingDto.schema.shape.isActive.default(true),
  title: UpdateListingDto.schema.shape.title.default(''),
  description: UpdateListingDto.schema.shape.description.default(''),
  address: UpdateListingDto.schema.shape.address.default(''),
  zip: UpdateListingDto.schema.shape.zip.default(''),
  muncipiality: UpdateListingDto.schema.shape.muncipiality.default(''),
  phone: UpdateListingDto.schema.shape.phone.default(''),
  email: UpdateListingDto.schema.shape.email.default(''),
}).omit({
  id: true,
});

type DataSchemaType = z.infer<typeof dataSchema>;

// Class namespace exports
export namespace CreateListingDto {
  export type SchemaType = DataSchemaType;
}

// Extend class with schema definitions
export interface CreateListingDto extends DataSchemaType {}

@ExposeDataSchemaAsProps(dataSchema)
export class CreateListingDto {
  public static schema = dataSchema;
  public data: DataSchemaType;

  constructor(data: DataSchemaType) {
    this.data = data;
    Object.freeze(this.data);
  }

  static from(data: Partial<DataSchemaType>): CreateListingDto {
    const parsedData = mergeWithDefaults(dataSchema, data);
    return new CreateListingDto(parsedData);
  }
}
