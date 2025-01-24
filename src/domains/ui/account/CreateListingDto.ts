import { z } from 'zod';
import { ExposeDataAsSchemaProps } from '~/shared/lib/ExposeDataAsSchemaProps';

import { LinkShema } from './Listing';

export const CreateListingDtoSchema = z.object({
  owner: z.string(),
  title: z.string().default(''),
  description: z.string().default(''),
  address: z.string().default(''),
  zip: z.string().default(''),
  muncipiality: z.string().default(''),
  phone: z.string().default(''),
  email: z.string().default(''),
  tags: z.array(z.any()).default([]),
  // Sub-schemas
  links: z.array(LinkShema).default([]),
});

export type CreateListingDtoSchemaType = z.infer<typeof CreateListingDtoSchema>;
// Add Schema props type definitions
export interface CreateListingDto extends CreateListingDtoSchemaType {}

@ExposeDataAsSchemaProps(CreateListingDtoSchema)
export class CreateListingDto {
  public data: CreateListingDtoSchemaType;

  constructor(data: CreateListingDtoSchemaType) {
    this.data = data;
  }

  static from(data: unknown): CreateListingDto {
    const parsedData = CreateListingDtoSchema.parse(data);
    return new CreateListingDto(parsedData);
  }
}
