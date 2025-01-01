import { z } from 'zod';

import { name, address, phone, checkLoadedData } from '../lib/form-utils';
import SurrealAdapter from '../adapters/SurrealDb';
import { zodSchemaDefaults } from '../lib/utils';
import { StateCreator, StateGetter, StateSetter } from '../types';

export const ProfileSchema = z.object({
  firstName: name.default(''),
  lastName: name.default(''),
  address: address.default(''),
  phone: phone.default(''),
});


export type ProfileState = z.infer<typeof ProfileSchema>;

/**
 * Class
 */
class ProfileService {
  repo: Repository
  #setState: StateSetter<ProfileState>
  state: StateGetter<ProfileState>

  constructor(
    SurrealAdapter: SurrealAdapter,
    useState: StateCreator<ProfileState>
  ) {
    this.repo = SurrealAdapter

    const [state, setState] = useState(zodSchemaDefaults(ProfileSchema))
    this.#setState = setState
    this.state = state
  }

  async loadData(): Promise<void> {
    const details = await  this.repo.getProfileDetails() as ProfileState
    checkLoadedData(ProfileSchema, details)
    this.#setState(details)
  }

  async saveData(details: ProfileState): Promise<void> {
    await this.repo.setProfileDetails(details)
    this.#setState(details)
  }
}

export default ProfileService;
