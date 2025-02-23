import { z } from 'zod';
import * as fields from '~/shared/zod/schemas';
import { parseWithDefaults } from '~/shared/zod/helpers';
import { Listing } from './Listing';
import { ExposeDataSchemaAsProps } from '~/shared/lib/ExposeDataSchemaAsProps';

const dataSchema = Listing.schema.extend({
  title: Listing.schema.shape.title.min(3).max(70),
  description: Listing.schema.shape.description.min(15).max(150),
  address: fields.address,
  zip: fields.zip,
  muncipiality: Listing.schema.shape.muncipiality,
  phone: fields.phone,
  email: fields.email,
  tags: Listing.schema.shape.tags.min(1).default([]),
  links: Listing.schema.shape.links.default([]),
});

type DataSchemaType = z.infer<typeof dataSchema>;

// Class namespace exports
export namespace UpdateListingDto {
  export type SchemaType = DataSchemaType;
}

// Add Schema props type definitions
export interface UpdateListingDto extends DataSchemaType {}

@ExposeDataSchemaAsProps(dataSchema)
export class UpdateListingDto {
  public static schema = dataSchema;
  public data: DataSchemaType;

  constructor(data: DataSchemaType) {
    this.data = data;
    Object.freeze(this.data);
  }

  static from(data: Partial<DataSchemaType>): UpdateListingDto {
    const parsedData = parseWithDefaults(dataSchema, data);
    return new UpdateListingDto(parsedData);
  }
}
