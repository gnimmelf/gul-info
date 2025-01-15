import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/models/ExposeDataAsSchemaProps';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;

@ExposeDataAsSchemaProps(UserSchema)
export class User {
  private data: UserSchemaType;

  constructor(data: UserSchemaType) {
    this.data = data;
  }

  static from(data: unknown): User {
    const parsedData = UserSchema.parse(data);
    return new User(parsedData);
  }
}
