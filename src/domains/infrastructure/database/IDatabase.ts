import { ListingViewSchemaType } from '../../../shared/models/listing/ListingViewModel';
import { IndexLetterViewSchemaType } from '../../../shared/models/IndexLetterViewModel';
import { TagViewSchemaType } from '../../../shared/models/TagViewModel';
import { FilterSchemaType } from '../../../shared/models/Filters';
import { UserViewSchemaType } from '../../../shared/models/UserViewModel';
import { ListingSchemaType } from '~/shared/models/listing/Listing';
import { CreateListingDtoSchemaType } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDtoSchemaType } from '~/shared/models/listing/UpdateListingDto';

export interface IDatabase {
  getIndexLetters: () => Promise<IndexLetterViewSchemaType[]>;
  getTags: () => Promise<TagViewSchemaType[]>;
  authenticate: (token: string, isVerified: boolean) => Promise<boolean>;
  getUserData: () => Promise<UserViewSchemaType>;
  getListingsByFilters: (
    filters?: FilterSchemaType,
  ) => Promise<ListingViewSchemaType[]>;
  getListingsByEmail: (email: string) => Promise<ListingSchemaType[]>;
  createListing: (
    data: CreateListingDtoSchemaType,
  ) => Promise<ListingSchemaType[]>;
  updateListing: (
    data: UpdateListingDtoSchemaType,
  ) => Promise<ListingSchemaType[]>;
}
