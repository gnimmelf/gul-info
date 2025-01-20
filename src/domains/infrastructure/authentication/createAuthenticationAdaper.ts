import { Auth0Adapter, Auth0Config } from './infrastructure/Auth0Adapter';
import { IAuthentication } from './IAuthentication';
import { IDatabase } from '../database/IDatabase';

export const createAuthenticationAdaper = async (
  db: IDatabase,
  auth0COnfig: Auth0Config,
): Promise<IAuthentication> => {
  const instance = new Auth0Adapter(auth0COnfig);
  await instance.initialize();
  return instance;
};