import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const TagViewSchema = z.object({
  id: z.any(),
  name: z.string(),
  usageCount: z.number().optional(),
});

export type TagViewModelSchemaType = z.infer<typeof TagViewSchema>;

// Add Schema props type definitions
export interface TagViewModel extends TagViewModelSchemaType {}

@ExposeDataAsSchemaProps(TagViewSchema)
export class TagViewModel {
  private data;

  constructor(data: TagViewModelSchemaType) {
    this.data = data;
  }

  static from(data: TagViewModelSchemaType): TagViewModel {
    const parsedData = TagViewSchema.parse(data);
    return new TagViewModel(parsedData);
  }

  get id() {
    return String(this.data.id);
  }
}
