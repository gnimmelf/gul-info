import { timeout } from '~/shared/lib/utils';
import { IDatabase } from '../../infrastructure/database/IDatabase';
import { Listing } from './Listing';
import { UserViewModel } from './UserViewModel';
import { CreateListingDtoSchemaType } from './CreateListingDto';
import { UpdateListingDtoSchemaType } from './UpdateListingDto';

/**
 * Class
 */
export class AccountService {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  public async getUser(token: string) {
    await timeout();
    await this.db.authenticate(token, true);
    const data = await this.db.getUserData();
    const model = UserViewModel.from(data);
    return model;
  }

  public async loadListingsByEmail(email: string) {
    await timeout();
    const data = await this.db.getListingsByEmail(email);
    const res = data
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map((data) => Listing.from(data));
    return res;
  }

  public async createListing(listing: CreateListingDtoSchemaType) {}

  public async updateListing(listing: UpdateListingDtoSchemaType) {}
}
