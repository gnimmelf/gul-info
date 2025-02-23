import { z } from 'zod';
import { ExposeDataSchemaAsProps } from '~/shared/lib/ExposeDataSchemaAsProps';

const dataSchema = z.object({
  id: z.any(),
  name: z.string(),
  usageCount: z.number().optional(),
});

type DataSchemaType = z.infer<typeof dataSchema>;

// Class namespace exports
export namespace TagViewModel {
  export type SchemaType = DataSchemaType;
}

// Add Schema props type definitions
export interface TagViewModel extends DataSchemaType {}

@ExposeDataSchemaAsProps(dataSchema)
export class TagViewModel {
  public static schema = dataSchema;
  private data;

  constructor(data: DataSchemaType) {
    this.data = data;
  }

  static from(data: DataSchemaType): TagViewModel {
    const parsedData = dataSchema.parse(data);
    return new TagViewModel(parsedData);
  }

  get id() {
    return String(this.data.id);
  }
}
