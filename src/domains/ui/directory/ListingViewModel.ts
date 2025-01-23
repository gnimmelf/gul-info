import { z } from 'zod';
import { TagViewSchema } from './TagViewModel';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const ListingViewSchema = z.object({
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

  static from(data: unknown): ListingViewModel {
    const parsedData = ListingViewSchema.parse(data);
    return new ListingViewModel(parsedData);
  }
}
