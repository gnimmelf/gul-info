import { ListingViewSchemaType } from '../../../shared/models/listing/ListingViewModel';
import { IndexLetterViewSchemaType } from '../../../shared/models/IndexLetterViewModel';
import { TagViewSchemaType } from '../../../shared/models/TagViewModel';
import { FilterSchemaType } from '../../ui/directory/Filters';
import { UserViewSchemaType } from '../../../shared/models/UserViewModel';
import { ListingSchemaType } from '~/shared/models/listing/Listing';

export interface IDatabase {
  getListings: (filters?: FilterSchemaType) => Promise<ListingViewSchemaType[]>;
  getIndexLetters: () => Promise<IndexLetterViewSchemaType[]>;
  getTags: () => Promise<TagViewSchemaType[]>;
  authenticate: (token: string, isVerified: boolean) => Promise<boolean>;
  getUserData: () => Promise<UserViewSchemaType>;
  getListingsByEmail: (email: string) => Promise<ListingSchemaType[]>;
}
