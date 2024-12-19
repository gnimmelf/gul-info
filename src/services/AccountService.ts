import { z } from 'zod';

import { checkLoadedData, email, pass } from '../lib/fields';
import DbService from './DbService';
import { StateCreator, StateGetter, StateSetter } from '../types';
import { zodSchemaDefaults } from '../lib/utils';

export const AccountSchema = z.object({
  email: email.default(''),
})
export type AccountState = z.infer<typeof AccountSchema>;

export const UpdateEmailSchema = z.object({
  email: email.default(''),
  pass: pass.default(''),
})
export type UpdateEmailParams = z.infer<typeof UpdateEmailSchema>;

export const UpdatePassSchema = z.object({
  newPass: pass.default(''),
  pass: pass.default(''),
})
export type UpdatePassParams = z.infer<typeof UpdatePassSchema>;

export const DeleteAccountSchema = z.object({
  pass: pass.default(''),
})
export type DeleteAccountParams = z.infer<typeof DeleteAccountSchema>;


/**
 * Class
 */
class AccountService {
  #dbService: DbService
  #setState: StateSetter<AccountState>
  state: StateGetter<AccountState>

  constructor(
    dbService: DbService,
    useState: StateCreator<AccountState>
  ) {
    this.#dbService = dbService

    const [state, setState] = useState(zodSchemaDefaults(AccountSchema))
    this.#setState = setState
    this.state = state
  }

  async loadData(): Promise<void> {
    const details = await this.#dbService.getAccountDetails() as AccountState
    checkLoadedData(AccountSchema, details)
    this.#setState(details)
  }

  async updateEmail(details: UpdateEmailParams): Promise<void> {
    await this.#dbService.setAccountEmail(details)
    this.#setState({ email: details.email })
  }

  async updatePassword(details: UpdatePassParams): Promise<void> {
    await this.#dbService.setAccountPassword(details)
  }

  async deleteAccount(details: DeleteAccountParams): Promise<void> {
    await this.#dbService.deleteAccount()
  }
}

export default AccountService;
