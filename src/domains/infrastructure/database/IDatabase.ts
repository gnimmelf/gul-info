import { ListingViewSchemaType } from '../../ui/directory/ListingViewModel';
import { IndexLetterViewSchemaType } from '../../ui/directory/IndexLetterViewModel';
import { TagViewSchemaType } from '../../ui/directory/TagViewModel';
import { TFilterState } from '../../ui/directory/Filters';
import { UserViewSchemaType } from '../../ui/account/UserViewModel';

export interface IDatabase {
  getListings: (filters?: TFilterState) => Promise<ListingViewSchemaType[]>;
  getIndexLetters: () => Promise<IndexLetterViewSchemaType[]>;
  getTags: () => Promise<TagViewSchemaType[]>;
  authenticate: (token: string, isVerified: boolean) => Promise<boolean>;
  getUserData: () => Promise<UserViewSchemaType>;
  // getUserListings: () => Promise<UserSchemaType>;
}
