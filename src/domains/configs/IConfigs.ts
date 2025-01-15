import { Auth0Config } from '../authentication/infrastructure/Auth0Adapter';
import { SurrealConfig } from '../database/SurrealDbAdapter';

export interface IConfigs {
  surreal: SurrealConfig;
  auth0: Auth0Config;
}
