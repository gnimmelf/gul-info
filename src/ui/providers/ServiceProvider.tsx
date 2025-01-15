import {
  Component,
  createContext,
  createEffect,
  createResource,
  JSXElement,
  Resource,
  Show,
  useContext,
} from 'solid-js';

import {
  DirectoryService,
  DirectoryState,
} from '~/features/directory/DirectoryService';
import { AccountService } from '~/features/account/AccountService';
import { useConfigs } from '~/ui/providers/ConfigsProvider';
import {
  accountFactory,
  authenticationFactory,
  databaseFactory,
  directoryServiceFactory,
} from '~/shared/infrastructure/factories';

type ServiceProviderType = {
  directory: Resource<DirectoryService>;
  account: Resource<AccountService>;
};

const ServiceContext = createContext<ServiceProviderType>();

/**
 * Class
 */
export const ServiceProvider: Component<{
  children: JSXElement;
}> = (props) => {
  const configs = useConfigs();

  const [db] = createResource(
    () => configs(),
    (configs) => databaseFactory(configs),
  );

  const [auth] = createResource(
    () => configs(),
    (configs) => authenticationFactory(configs),
  );

  const [directory] = createResource(
    () => db(),
    (db) => directoryServiceFactory(db),
  );

  const [account] = createResource(
    () => (db() && auth() ? { db: db(), auth: auth() } : false),
    ({ db, auth }) => accountFactory(db!, auth!),
  );

  createEffect(() => console.log(directory()?.state()));

  /**
   * NOTE! Use a resource as provider `value`. The consumation is identical to a store,
   * but a resource will trigger suspense, a store will not.
   */
  const [services] = createResource<ServiceProviderType>(() => ({
    directory,
    account,
  }));

  return (
    <ServiceContext.Provider value={services()}>
      <Show when={services()}>{props.children}</Show>
    </ServiceContext.Provider>
  );
};

// Use-hook
export const useService = () => {
  const context = useContext(ServiceContext) as ServiceProviderType;
  if (!context) {
    throw new Error('useService must be used within an ServiceProvider');
  }
  return context;
};
