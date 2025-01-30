import { createMemo, createResource, createSignal } from 'solid-js';

import { AccountService } from '~/domains/ui/account/AccountService';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { IAuthentication } from '~/domains/infrastructure/authentication/IAuthentication';
import { checkAdapterReturnType } from './checkAdapterReturnType';

export const createAccountServiceAdaper = (
  db: IDatabase,
  auth: IAuthentication,
) => {
  const account = new AccountService(db);

  const [shouldAuthenticate, setShouldAuthenticate] = createSignal(false);

  const [isAuthenticated] = createResource(
    () => shouldAuthenticate(),
    () => auth.isAuthenticated(),
  );

  const [authData] = createResource(
    () => isAuthenticated(),
    async () => {
      const data = await auth.getAuthData!();
      return data;
    },
  );

  const mustVerifyEmail = createMemo(() =>
    authData()?.email_verified ? false : authData()?.email,
  );

  const [user] = createResource(
    () => {
      if (authData() && !mustVerifyEmail()) {
        return true;
      }
      setShouldAuthenticate(true);
    },
    async () => {
      const token = await auth.getAccessToken();
      const user = await account.getUser(token);
      console.log({ user });
      return user;
    },
  );

  const adapter = checkAdapterReturnType({
    resources: {
      user,
    },
    mustVerifyEmail,
    login: auth.login.bind(auth),
    logout: auth.logout.bind(auth)
  });

  return adapter;
};
