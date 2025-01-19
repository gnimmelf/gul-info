import { _State } from '~/shared/lib/_State';
import { timeout } from '~/shared/lib/utils';

/**
 * Class
 */
export class ConfigsService {
  private configsUrl: string;

  constructor(configsUrl: string) {
    this.configsUrl = configsUrl;
  }

  public async loadConfigs() {
    // TODO! Implement as fetcher
    console.log({ configsUrl: this.configsUrl });
    await timeout();
    return {
      auth0: {
        domain: 'intergate.eu.auth0.com',
        clientId: 'd63m36lvjcGcQZoYjF06IIgczFdIHGqN',
        authorizationParams: {
          audience: 'https://surrealdb.com/',
          redirect_uri: window.location.origin,
        },
      },
      surreal: {
        namespace: 'intergate',
        database: 'gul-info',
        url: 'https://127.0.0.1:7999/rpc',
      },
    };
  }
}
