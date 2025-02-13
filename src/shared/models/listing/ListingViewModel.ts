import { z } from 'zod';
import { TagViewSchema } from '../TagViewModel';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';
import { parseWithDefaults } from '~/shared/zod/helpers';
import { ListingSchema } from './Listing';

export const ListingViewSchema = ListingSchema.extend({});

export type ListingViewSchemaType = z.infer<typeof ListingViewSchema>;

// Add Schema props type definitions
export interface ListingViewModel extends ListingViewSchemaType {}

@ExposeDataAsSchemaProps(ListingViewSchema)
export class ListingViewModel {
  public schema = ListingViewSchema;
  public data;

  constructor(data: ListingViewSchemaType) {
    this.data = data;
  }

  static from(data: Partial<ListingViewSchemaType>): ListingViewModel {
    const parsedData = parseWithDefaults(ListingViewSchema, data);
    return new ListingViewModel(parsedData);
  }
}
