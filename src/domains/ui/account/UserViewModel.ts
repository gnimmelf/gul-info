import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

export const UserViewSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export type UserViewSchemaType = z.infer<typeof UserViewSchema>;

@ExposeDataAsSchemaProps(UserViewSchema)
export class UserViewModel {
  private data: UserViewSchemaType;

  constructor(data: UserViewSchemaType) {
    this.data = data;
  }

  static from(data: unknown): UserViewModel {
    const parsedData = UserViewSchema.parse(data);
    return new UserViewModel(parsedData);
  }
}
