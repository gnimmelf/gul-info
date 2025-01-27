import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const TagViewSchema = z.object({
  key: z.string(),
  name: z.string(),
  usageCount: z.number(),
});

export type TagViewSchemaType = z.infer<typeof TagViewSchema>;

// Add Schema props type definitions
export interface TagViewModel extends TagViewSchemaType {}

@ExposeDataAsSchemaProps(TagViewSchema)
export class TagViewModel {
  private data;

  constructor(data: TagViewSchemaType) {
    this.data = data;
  }

  static from(data: TagViewSchemaType): TagViewModel {
    const parsedData = TagViewSchema.parse(data);
    return new TagViewModel(parsedData);
  }
}
