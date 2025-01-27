import { z } from 'zod';
import { TagViewSchema } from '../TagViewModel';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';
import { parseWithDefaults } from '~/shared/lib/schema-helpers';

export const ListingViewSchema = z.object({
  title: z.string(),
  description: z.string(),
  address: z.string(),
  zip: z.string(),
  muncipiality: z.string(),
  phone: z.string(),
  email: z.string().email(),
  links: z.array(
    z.object({
      href: z.string(),
    }),
  ),
  tags: z.array(TagViewSchema.omit({ usageCount: true })),
});

export type ListingViewSchemaType = z.infer<typeof ListingViewSchema>;

// Add Schema props type definitions
export interface ListingViewModel extends ListingViewSchemaType {}

@ExposeDataAsSchemaProps(ListingViewSchema)
export class ListingViewModel {
  private data;

  constructor(data: ListingViewSchemaType) {
    this.data = data;
  }

  static from(data: Partial<ListingViewSchemaType>): ListingViewModel {
    const parsedData = parseWithDefaults(ListingViewSchema, data);
    return new ListingViewModel(parsedData);
  }
}
