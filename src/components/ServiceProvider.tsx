import {
  Component,
  createContext,
  JSXElement,
  Suspense,
  useContext,
  createResource,
  createSignal,
} from 'solid-js';

import DbService from '../services/DbService';
import AuthService from '../services/AuthService';
import AccountService from '../services/AccountService';
import ProfileService from '../services/ProfileService';
import { Loading } from './partials/Loading';
import { noop } from '../lib/utils';
import Surreal from 'surrealdb';

type TServiceProvider = {
  auth: AuthService
  account: AccountService
  profile: ProfileService
  // TODO! Make into a `DataService` based on `ProfileService`
  getDb: () => Promise<Surreal>
}

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
  const dbService = new DbService({
    datapoint: props.datapoint,
    namespace: props.namespace,
    database: props.database
  }, createSignal)

  const authService = new AuthService(dbService, {
    namespace: props.namespace,
    database: props.database,
  }, createSignal)

  const accountService = new AccountService(
    dbService,
    createSignal
  );

  const profileService = new ProfileService(
    dbService,
    createSignal
  );

  const services = {
    auth: authService,
    account: accountService,
    profile: profileService,
    getDb: dbService.getDb.bind(dbService)
  };

  const [connectDb] = createResource(
    () => !(dbService.state().isConnected),
    async () => {
      await dbService.connect()
    }
  );

  return (
    <Suspense fallback={<Loading />}>
      {noop(connectDb)}
      <ServiceContext.Provider value={services}>
        {props.children}
      </ServiceContext.Provider>
    </Suspense>
  );
};

export const useService = () => {
  return useContext(ServiceContext) as TServiceProvider;
};
