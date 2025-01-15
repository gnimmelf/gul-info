import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/models/ExposeDataAsSchemaProps';

export const IndexLetterSchema = z.object({
  letter: z.string().length(1),
  count: z.number(),
});

export type IndexLetterSchemaType = z.infer<typeof IndexLetterSchema>;

@ExposeDataAsSchemaProps(IndexLetterSchema)
export class IndexLetter {
  private data;

  constructor(data: IndexLetterSchemaType) {
    this.data = data;
  }

  static from(data: unknown): IndexLetter {
    const parsedData = IndexLetterSchema.parse(data);
    return new IndexLetter(parsedData);
  }
}

export interface IndexLetter extends IndexLetterSchemaType {}
