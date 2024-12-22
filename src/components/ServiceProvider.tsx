import {
  Component,
  createContext,
  createSignal,
  JSXElement,
  useContext,
} from "solid-js";

import ApiService from "~/services/ApiService";
import AuthService from "~/services/AuthService";
import AccountService from "~/services/AccountService";
import ProfileService from "~/services/ProfileService";
import DirectoryService from "~/services/DirectoryService";

type TServiceProvider = {
  api: ApiService;
  auth: AuthService;
  account: AccountService;
  profile: ProfileService;
  directory: DirectoryService;
};

const ServiceContext = createContext<TServiceProvider>();

/**
 * Class
 */
export const ServiceProvider: Component<{
  namespace: string;
  database: string;
  datapoint: string;
  children: JSXElement;
}> = (props) => {
  const apiService = new ApiService({
    datapoint: props.datapoint,
    namespace: props.namespace,
    database: props.database,
  }, createSignal);

  const directoryService = new DirectoryService(
    apiService,
  );

  const authService = new AuthService(
    apiService,
    createSignal,
  );

  const accountService = new AccountService(
    apiService,
    createSignal,
  );

  const profileService = new ProfileService(
    apiService,
    createSignal,
  );

  const services = {
    api: apiService,
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
  return useContext(ServiceContext) as TServiceProvider;
};
