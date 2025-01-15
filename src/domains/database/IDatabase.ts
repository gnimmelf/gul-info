import { ListingSchemaType } from '../directory/Listing';
import { IndexLetterSchemaType } from '../directory/IndexLetter';
import { TagSchemaType } from '../directory/Tag';
import { TFilterState } from '../directory/Filters';
import { UserSchemaType } from '../account/User';

export interface IDatabase {
  getListings: (filters?: TFilterState) => Promise<ListingSchemaType[]>;
  getIndexLetters: () => Promise<IndexLetterSchemaType[]>;
  getTags: () => Promise<TagSchemaType[]>;
  authenticate: (token: string, isVerified: boolean) => Promise<boolean>;
  getUserData: () => Promise<UserSchemaType>;
}
