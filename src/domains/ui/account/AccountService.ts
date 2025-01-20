import { IDatabase } from '../../infrastructure/database/IDatabase';
import { IAuthentication } from '../../infrastructure/authentication/IAuthentication';

import { UserViewModel } from './UserViewModel';
import { Listing } from './Listing';
import { timeout } from '~/shared/lib/utils';

/**
 * Class
 */
export class AccountService {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  public async getUserData() {
    await timeout();
    const data = this.db.getUserData()
    return UserViewModel.from(data)
  }

  public async loadListingsByEmail(email: string) {
    await timeout();
    const data = await this.db.getListingsByEmail(email);
    const res = data
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map((data) => Listing.from(data));
    return res;
  }
}
