import { createResource, createSignal } from 'solid-js';

import { AccountService } from '~/domains/ui/account/AccountService';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { IAuthentication } from '~/domains/infrastructure/authentication/IAuthentication';
import { IAuthData } from '~/domains/infrastructure/authentication/infrastructure/Auth0Adapter';
import { checkAdapterReturnType } from './checkAdapterReturnType';
import { timeout } from '~/shared/lib/utils';

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
      await timeout(600)
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
