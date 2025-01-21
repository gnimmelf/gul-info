import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const IndexLetterViewSchema = z.object({
  letter: z.string().length(1),
  count: z.number(),
});

export type IndexLetterViewSchemaType = z.infer<typeof IndexLetterViewSchema>;
export interface IndexLetterViewModel extends IndexLetterViewSchemaType {}

@ExposeDataAsSchemaProps(IndexLetterViewSchema)
export class IndexLetterViewModel {
  private data: IndexLetterViewSchemaType;

  constructor(data: IndexLetterViewSchemaType) {
    this.data = data;
  }

  static from(data: unknown): IndexLetterViewModel {
    const parsedData = IndexLetterViewSchema.parse(data);
    return new IndexLetterViewModel(parsedData);
  }
}
