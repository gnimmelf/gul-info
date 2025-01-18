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

import { createAuthenticationAdaper } from '~/domains/authentication/createAuthenticationAdaper';
import { createDirectoryServiceAdapter } from '~/solid-js/application/createDirectoryServiceAdaper';
import { createAccountServiceAdaper } from '~/solid-js/application/createAccountServiceAdaper';

type TDirectoryAdapter = Awaited<
  ReturnType<typeof createDirectoryServiceAdapter>
>;

type TAccountAdapter = Awaited<ReturnType<typeof createAccountServiceAdaper>>;

type IServiceContext = {
  directory: Resource<TDirectoryAdapter>;
  account: Resource<TAccountAdapter>;
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

  const [account] = createResource(
    () => auth(),
    (auth) => createAccountServiceAdaper(system.db(), auth),
  );

  const [directory] = createResource(
    () => system.db(),
    (db) => createDirectoryServiceAdapter(db),
  );

  const services = {
    directory,
    account,
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
