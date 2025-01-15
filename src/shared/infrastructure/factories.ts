import { createSignal } from 'solid-js';

import { DirectoryService, DirectoryState } from '~/features/directory/DirectoryService';
import { withReactiveState } from '../services/withReactiveState';
import { IDatabase } from '~/features/database/IDatabase';
import { ConfigsService } from '~/features/configs/ConfigsService';
import { Auth0Adapter, Auth0Config } from './Auth0Adapter';
import { SurrealAdapter, SurrealConfig } from './SurrealDbAdapter';
import { AccountService } from '~/features/account/AccountService';
import { IAuthentication } from '~/features/account/IAuthentication';

export interface ConfigsState {
  surreal: SurrealConfig;
  auth0: Auth0Config;
}

export const configsFactory = async (url: string) => {
  const instance = withReactiveState<ConfigsService, ConfigsState>(
    new ConfigsService(url),
    createSignal,
  );
  await instance.initialize();
  return instance;
};

export const databaseFactory = async (
  configs: ConfigsService,
): Promise<IDatabase> => {
  const instance = new SurrealAdapter(configs.state().surreal!);
  await instance.initialize();
  return instance;
};

export const authenticationFactory = async (
  configs: ConfigsService,
): Promise<IAuthentication> => {
  const instance = new Auth0Adapter(configs.state().auth0!);
  await instance.initialize();
  return instance;
};

export const directoryServiceFactory = async (db: IDatabase) => {
  const instance = withReactiveState<DirectoryService, DirectoryState>(
    new DirectoryService(db),
    createSignal,
  );
  await instance.initialize();
  return instance;
};

export const accountFactory = async (db: IDatabase, auth: IAuthentication) => {
  const instance = new AccountService(db!, auth!);
  await instance.initialize();
  return instance;
};
