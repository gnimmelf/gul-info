import { z } from 'zod';
import { ExposeSchemaProps } from '~/shared/models/ExposePropsDecorator';

export const TagSchema = z.object({
  key: z.string(),
  name: z.string(),
  usageCount: z.number(),
});

export type TagSchemaType = z.infer<typeof TagSchema>;

@ExposeSchemaProps(TagSchema)
export class Tag {
  private data;

  constructor(data: TagSchemaType) {
    this.data = data;
  }

  static from(data: unknown): Tag {
    const parsedData = TagSchema.parse(data);
    return new Tag(parsedData);
  }
}

export interface Tag extends TagSchemaType {}
