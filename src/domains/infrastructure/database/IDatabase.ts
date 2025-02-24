import { IndexLetterViewModel } from '../../../shared/models/IndexLetterViewModel';
import { TagViewModel } from '../../../shared/models/TagViewModel';
import { Filters } from '../../../shared/models/Filters';
import { UserViewModel } from '../../../shared/models/UserViewModel';
import { Listing } from '~/shared/models/listing/Listing';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDto } from '~/shared/models/listing/UpdateListingDto';

export interface IDatabase {
  getIndexLetterUsages: () => Promise<IndexLetterViewModel.SchemaType[]>;
  getTags: () => Promise<TagViewModel.SchemaType[]>;
  getTagUsages: () => Promise<TagViewModel.SchemaType[]>;
  // TODO! Set proper returntype for `resendVerificationToken`
  resendVerificationEmail: (emailVerificationId: string) => Promise<any>;
  authenticate: (token: string, failSilently: boolean) => Promise<boolean>;
  getUserData: () => Promise<UserViewModel.SchemaType>;
  getListingsByFilters: (filters?: Filters.SchemaType) => Promise<Listing.SchemaType[]>;
  getListingsByEmail: (email: string) => Promise<Listing.SchemaType[]>;
  createListing: (data: CreateListingDto.SchemaType) => Promise<Listing.SchemaType>;
  deleteListing: (listingId: string) => Promise<void>;
  updateListing: (data: UpdateListingDto.SchemaType) => Promise<Listing.SchemaType>;
}
