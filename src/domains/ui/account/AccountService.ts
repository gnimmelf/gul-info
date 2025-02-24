import { timeout } from '~/shared/lib/utils';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { UserViewModel } from '~/shared/models/UserViewModel';

/**
 * Class
 */
export class AccountService {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  /**
   * Autheticate auth service access-token with Db and return db-user
   * @param token authProvider access token
   * @returns UserViewModel around db-user data
   */
  public async getUser(token: string) {
    await this.db.authenticate(token, true);
    const data = await this.db.getUserData();
    const model = UserViewModel.from(data);
    return model;
  }

  public async resendVerificationEmail(emailVerificationId: string) {
    try {
      const res = await this.db.resendVerificationEmail(emailVerificationId);
      console.log('resendVerificationEmail', { emailVerificationId, res });
    } catch(err) {
      console.error(err)
    }
  }
}
