
import { ListingSchemaType } from '~/shared/models/listing/Listing';
import { CreateListingDtoSchemaType } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDtoSchemaType } from '~/shared/models/listing/UpdateListingDto';
import { CRUD_MODES } from '../lib/enums';

export type ListingPayload =
  | { mode: CRUD_MODES.CREATE; data: CreateListingDtoSchemaType }
  | { mode: CRUD_MODES.READ; data: ListingSchemaType }
  | { mode: CRUD_MODES.UPDATE; data: UpdateListingDtoSchemaType };
  // | { mode: CRUD_MODES.DELETE; data: DeleteListingDtoSchemaType };

