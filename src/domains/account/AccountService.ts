/**
 * TODO! Pri#2 Make impartial to SolidJs, base on ConfigService and DirectoryService
 */
import { createMemo, createResource, createSignal, Resource } from 'solid-js';

import { StateGetter, StateSetter } from '~/solid-js/types';

import { User } from './User';
import { IDatabase } from '../database/IDatabase';
import { IAuthentication } from '../authentication/IAuthentication';

/**
 * Class
 */
export class AccountService {
  private db: IDatabase;
  private auth: IAuthentication;
  private setIsAuthenticated: StateSetter<boolean>;

  public authData: Resource<Record<string, any>>;
  public userData: Resource<User>;
  public isAuthenticated: StateGetter<boolean>;
  public isAwaitingVerification: () => boolean;

  constructor(db: IDatabase, auth: IAuthentication) {
    this.db = db;
    this.auth = auth;

    /**
     * Reactivity
     */
    [this.isAuthenticated, this.setIsAuthenticated] = createSignal(false);

    [this.authData] = createResource(
      // Third party authentication
      () => this.auth.isAuthenticated(),
      () => this.auth.getAuthData!(),
    );

    [this.userData] = createResource(
      // First party authentication
      () => this.isAuthenticated() && !this.isAwaitingVerification(),
      () => this.db.getUserData(),
    );

    this.isAwaitingVerification = createMemo(() => {
      return this.authData()?.email_verified === false;
    });
  }

  async initialize() {
    if (await this.auth.isAuthenticated()) {
      const token = await this.auth.getAccessToken();
      const res = await this.db.authenticate(
        token,
        this.isAwaitingVerification(),
      );
      this.setIsAuthenticated(res);
    }
  }

  async login() {
    return this.auth.login();
  }

  async logout() {
    return this.auth.logout();
  }
}
