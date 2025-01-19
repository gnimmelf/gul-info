import { IDatabase } from '../../infrastructure/database/IDatabase';
import { IAuthentication } from '../../infrastructure/authentication/IAuthentication';

import { UserViewModel } from './UserViewModel';

/**
 * Class
 */
export class AccountService {
  private db: IDatabase;
  private auth: IAuthentication;

  constructor(db: IDatabase, auth: IAuthentication) {
    this.db = db;
    this.auth = auth;
  }

  public async authenticate() {
    if (await this.auth.isAuthenticated()) {
      const token = await this.auth.getAccessToken();
      let res = await this.db.authenticate(token, true);
      return res;
    }
    return false;
  }

  public async login() {
    return this.auth.login();
  }

  public async logout() {
    return this.auth.logout();
  }

  public getMyListings(email: string) {
    return
  }
}
