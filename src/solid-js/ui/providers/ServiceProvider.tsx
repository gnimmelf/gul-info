import {
  Component,
  createContext,
  createMemo,
  createResource,
  JSXElement,
  Resource,
  Show,
  useContext,
} from 'solid-js';

import { useSystem } from '~/solid-js/ui/providers/CoreProvider';

import { createDatabaseAdapter } from '~/domains/database/createDatabaseAdapter';
import { createAuthenticationAdaper } from '~/domains/authentication/createAuthenticationAdaper';
import { createDirectoryServiceAdapter } from '~/solid-js/application/createDirectoryServiceAdaper';

type TDirectoryAdapter = Awaited<
  ReturnType<typeof createDirectoryServiceAdapter>
>;

type IServiceContext = {
  directory: Resource<TDirectoryAdapter>;
};

const ServiceContext = createContext<IServiceContext>();

/**
 * Class
 */
export const ServiceProvider: Component<{
  children: JSXElement;
}> = (props) => {
  const system = useSystem();

  const [auth] = createResource(
    () => system.configs(),
    (configs) => createAuthenticationAdaper(configs.auth0),
  );

  const [directory] = createResource(
    () => system.db(),
    (db) => createDirectoryServiceAdapter(db),
  );

  const services = {
    directory,
  };

  return (
    <ServiceContext.Provider value={services}>
      {props.children}
    </ServiceContext.Provider>
  );
};

// Use-hook
export const useService = () => {
  const context = useContext(ServiceContext) as IServiceContext;
  if (!context) {
    throw new Error('useService must be used within an ServiceProvider');
  }
  return context;
};
