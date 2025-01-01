import {
  Component,
  createContext,
  createSignal,
  JSXElement,
  useContext,
} from "solid-js";

import SurrealAdapter from "~/adapters/SurrealDb";
import AuthService from "~/core/AuthService";
import AccountService from "~/core/AccountService";
import ProfileService from "~/core/ProfileService";
import DirectoryService from "~/core/DirectoryService";

type ServiceProviderType = {
  api: SurrealAdapter;
  auth: AuthService;
  account: AccountService;
  profile: ProfileService;
  directory: DirectoryService;
};

const ServiceContext = createContext<ServiceProviderType>();

/**
 * Class
 */
export const ServiceProvider: Component<{
  namespace: string;
  database: string;
  datapoint: string;
  children: JSXElement;
}> = (props) => {
  const repository = new SurrealAdapter({
    datapoint: props.datapoint,
    namespace: props.namespace,
    database: props.database,
  });

  const directoryService = new DirectoryService(
    repository,
  );

  const authService = new AuthService(
    repository,
    createSignal,
  );

  const accountService = new AccountService(
    repository,
    createSignal,
  );

  const profileService = new ProfileService(
    repository,
    createSignal,
  );

  const services = {
    api: repository,
    auth: authService,
    account: accountService,
    profile: profileService,
    directory: directoryService,
  };

  return (
    <ServiceContext.Provider value={services}>
      {props.children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  return useContext(ServiceContext) as ServiceProviderType;
};
