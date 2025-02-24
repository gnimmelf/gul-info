import { z } from 'zod';
import { ExposeDataSchemaAsProps } from '~/shared/lib/ExposeDataSchemaAsProps';

export const dataSchema = z.object({
  id: z.any(),
  email: z.string().email(),
});

export type DataSchemaType = z.infer<typeof dataSchema>;

// Class namespace exports
export namespace UserViewModel {
  export type SchemaType = DataSchemaType;
}
// Add Schema props type definitions
export interface UserViewModel extends DataSchemaType {}

@ExposeDataSchemaAsProps(dataSchema)
export class UserViewModel {
  public static schema = dataSchema;
  private data: DataSchemaType;

  constructor(data: DataSchemaType) {
    this.data = data;
  }

  static from(data: DataSchemaType): UserViewModel {
    const parsedData = dataSchema.parse(data);
    return new UserViewModel(parsedData);
  }
}
