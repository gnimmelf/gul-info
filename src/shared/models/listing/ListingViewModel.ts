import { ExposeDataSchemaAsProps } from '~/shared/lib/ExposeDataSchemaAsProps';
import { parseWithDefaults } from '~/shared/zod/helpers';
import { Listing } from './Listing';
import { z } from 'zod';

const dataSchema = Listing.schema
  .extend({});

type DataSchemaType = z.infer<typeof dataSchema>;

// Class namespace exports
export namespace ListingViewModel {
  export type SchemaType = DataSchemaType;
}

// Extend class with schema definitions
export interface ListingViewModel extends DataSchemaType {}

@ExposeDataSchemaAsProps(dataSchema)
export class ListingViewModel {
  public static schema = dataSchema;
  public data;

  constructor(data: DataSchemaType) {
    this.data = data;
    Object.freeze(this.data);
  }

  static from(data: Partial<DataSchemaType>): ListingViewModel {
    const parsedData = parseWithDefaults(dataSchema, data);
    return new ListingViewModel(parsedData);
  }
}