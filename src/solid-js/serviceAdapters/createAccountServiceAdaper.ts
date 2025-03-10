import { createMemo, createResource, createSignal } from 'solid-js';

import { AccountService } from '~/domains/ui/account/AccountService';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { IAuthentication } from '~/domains/infrastructure/authentication/IAuthentication';
import { checkAdapterReturnType } from './checkAdapterReturnType';

export const createAccountServiceAdaper = (db: IDatabase, auth: IAuthentication) => {
  const accountService = new AccountService(db);

  const [onResendVerificationEmail, setResendVerificationEmail] = createSignal(
    new Date(),
  );
  const [onShouldAuthenticate, setShouldAuthenticate] = createSignal(false);

  const [isAuthenticated] = createResource(
    () => onShouldAuthenticate(),
    () => auth.isAuthenticated(),
  );

  const [authData] = createResource(
    () => isAuthenticated(),
    async () => {
      const data = await auth.getAuthData!();
      console.log('authData', { data })
      return data;
    },
  );

  // Starting point - triggered from JSX
  const [user] = createResource(
    () => {
      if (!authData()) {
        setShouldAuthenticate(true);
        return false;
      }
      return authData();
    },
    async (authData) => {
      const token = await auth.getAccessToken();
      const user = await accountService.getUser(token);
      console.log({ authData, token, user })
      return user;
    },
  );

  const mustVerifyEmail = createMemo(() =>
    authData()?.email_verified ? false : authData()?.email,
  );

  const [resendVerificationEmail] = createResource(
    () => onResendVerificationEmail(),
    async () => {
      if (authData() && mustVerifyEmail()) {
        const email_verification_id = authData()!.sub;
        await accountService.resendVerificationEmail(email_verification_id!);
      }
    },
  );

  const adapter = checkAdapterReturnType({
    resources: {
      user,
      resendVerificationEmail,
    },
    mustVerifyEmail,
    resendVerificationEmail: () => setResendVerificationEmail(new Date()),
    login: auth.login.bind(auth),
    logout: auth.logout.bind(auth),
  });

  return adapter;
};
