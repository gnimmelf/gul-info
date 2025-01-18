import { createResource, createSignal } from 'solid-js';

import { AccountService } from '~/domains/account/AccountService';
import { IDatabase } from '~/domains/database/IDatabase';
import { IAuthentication } from '~/domains/authentication/IAuthentication';
import { IAuthData } from '~/domains/authentication/infrastructure/Auth0Adapter';
import { checkAdapterReturnType } from './checkAdapterReturnType';

export const createAccountServiceAdaper = (
  db: IDatabase,
  auth: IAuthentication,
) => {
  const instance = new AccountService(db, auth);

  const [doInitialize, setDoInitialize] = createSignal(false);

  const [isAuthenticated] = createResource(
    () => doInitialize(),
    () => instance.authenticate(),
  );

  const [authData] = createResource<IAuthData, boolean>(
    () => isAuthenticated(),
    () => auth.getAuthData!(),
  );

  const [userData] = createResource(
    () => authData(),
    async () => {
      const userData = db.getUserData();
      return userData;
    },
  );

  const adapter = checkAdapterReturnType({
    resources: {
      isAuthenticated,
      userData,
      authData,
    },
    initialize: () => setDoInitialize(true),
    login: instance.login.bind(instance),
    logout: instance.logout.bind(instance),
  });

  return adapter;
};
