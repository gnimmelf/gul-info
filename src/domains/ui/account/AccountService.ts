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

  public async getUser(token: string) {
    await timeout();
    await this.db.authenticate(token, true);
    const data = await this.db.getUserData();
    const model = UserViewModel.from(data);
    return model;
  }
}
