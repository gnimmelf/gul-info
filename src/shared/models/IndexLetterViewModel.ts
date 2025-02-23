import { z } from 'zod';
import { ExposeDataSchemaAsProps } from '~/shared/lib/ExposeDataSchemaAsProps';

const dataSchema = z.object({
  letter: z.string().length(1),
  count: z.number(),
});

type DataSchemaType = z.infer<typeof dataSchema>;

// Class namespace exports
export namespace IndexLetterViewModel {
  export type SchemaType = DataSchemaType;
}

// Extend class with schema definitions
export interface IndexLetterViewModel extends DataSchemaType {}

@ExposeDataSchemaAsProps(dataSchema)
export class IndexLetterViewModel {
  public static schema = dataSchema;
  private data: DataSchemaType;

  constructor(data: DataSchemaType) {
    this.data = data;
  }

  static from(data: DataSchemaType): IndexLetterViewModel {
    const parsedData = dataSchema.parse(data);
    return new IndexLetterViewModel(parsedData);
  }
}
