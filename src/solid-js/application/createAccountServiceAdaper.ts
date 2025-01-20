import { createEffect, createMemo, createResource, createSignal } from 'solid-js';

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
  const account = new AccountService(db);

  const [initializing, setInitializing] = createSignal(false);

  const [isAuthenticated] = createResource(
    () => initializing(),
    () => auth.isAuthenticated()
  );

  const [authData] = createResource(
    () => isAuthenticated(),
    async () => {
      const data = await auth.getAuthData!();
      return data;
    },
  );

  const mustVerifyEmail = createMemo(() => authData()?.email_verified ? false : authData()?.email)
  const ensureIsLoggedIn = createMemo(() => {
    if (authData() && !mustVerifyEmail()) {
      return true
    }
    setInitializing(true)
  })

  const [user] = createResource(
    () => ensureIsLoggedIn(),
    async () => {
      const token = await auth.getAccessToken()
      const data = await account.getUserData(token);
      return data;
    }
  );

  createEffect(() => console.log(user()))

  const [listings] = createResource(
    () => user(),
    (user) => account.loadListingsByEmail(user.email)
  )

  const adapter = checkAdapterReturnType({
    resources: {
      user,
      listings,
    },
    mustVerifyEmail,
    login: auth.login.bind(auth),
    logout: auth.logout.bind(auth),
  });

  return adapter;
};
