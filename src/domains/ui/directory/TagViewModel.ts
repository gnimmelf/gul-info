import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const TagViewSchema = z.object({
  key: z.string(),
  name: z.string(),
  usageCount: z.number(),
});

export type TagViewSchemaType = z.infer<typeof TagViewSchema>;

@ExposeDataAsSchemaProps(TagViewSchema)
export class TagViewModel {
  private data;

  constructor(data: TagViewSchemaType) {
    this.data = data;
  }

  static from(data: unknown): TagViewModel {
    const parsedData = TagViewSchema.parse(data);
    return new TagViewModel(parsedData);
  }
}

export interface TagViewModel extends TagViewSchemaType {}
