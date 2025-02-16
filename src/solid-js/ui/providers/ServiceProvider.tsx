import {
  Component,
  createContext,
  createEffect,
  createResource,
  createSignal,
  JSXElement,
  Resource,
  useContext,
} from 'solid-js';

import { useSystem } from '~/solid-js/ui/providers/SystemProvider';

import { createAuthenticationAdaper } from '~/domains/infrastructure/authentication/createAuthenticationAdaper';

import { createDirectoryServiceAdapter } from '~/solid-js/serviceAdapters/createDirectoryServiceAdaper';
import { createAccountServiceAdaper } from '~/solid-js/serviceAdapters/createAccountServiceAdaper';
import { createListingsServiceAdaper } from '~/solid-js/serviceAdapters/createListingsServiceAdaper';
import { UserViewModel } from '~/shared/models/UserViewModel';

type TDirectoryAdapter = Awaited<ReturnType<typeof createDirectoryServiceAdapter>>;
type TAccountAdapter = Awaited<ReturnType<typeof createAccountServiceAdaper>>;
type TListingsAdapter = Awaited<ReturnType<typeof createListingsServiceAdaper>>;

type IServiceContext = {
  directory: Resource<TDirectoryAdapter>;
  account: Resource<TAccountAdapter>;
  listings: Resource<TListingsAdapter>;
};

const ServiceContext = createContext<IServiceContext>();

/**
 * Class
 */
export const ServiceProvider: Component<{
  children: JSXElement;
}> = (props) => {
  const { db, configs, resources } = useSystem();

  const [user, setUser] = createSignal<UserViewModel | undefined>(undefined);

  const [account] = createResource(async () => {
    const auth = await createAuthenticationAdaper(db, configs.auth0);
    return createAccountServiceAdaper(db, auth);
  });

  createEffect(() => setUser(account()?.resources.user()));

  const [listings] = createResource(() =>
    createListingsServiceAdaper(db, user, resources),
  );

  const [directory] = createResource(() => createDirectoryServiceAdapter(db, resources));

  const services = {
    account,
    listings,
    directory,
  };

  return (
    <ServiceContext.Provider value={services}>{props.children}</ServiceContext.Provider>
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
