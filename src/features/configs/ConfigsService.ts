import { _ServiceState } from '~/shared/services/_ServiceState';

/**
 * Class
 */
export class ConfigsService extends _ServiceState<any> {
  private configsUrl: string;

  constructor(configsUrl: string) {
    super({});
    this.configsUrl = configsUrl;
  }

  async initialize() {
    console.log({ configsUrl: this.configsUrl });

    return await new Promise<void>((resolve) => {
      // TODO! Fetch from url
      setTimeout(() => {
        this.setState({
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
        });
        resolve();
      }, 1200);
    });
  }
}
