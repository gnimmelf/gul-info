import { createAuth0Client, Auth0Client, User } from '@auth0/auth0-spa-js';
import { IAuthentication } from '~/features/account/IAuthentication';

export interface Auth0Config {
  domain: string;
  clientId: string;
  authorizationParams?: {
    audience: string;
    redirect_uri?: string;
  };
}

/**
 * Class
 */
export class Auth0Adapter implements IAuthentication {
  private config: Auth0Config;
  private client!: Auth0Client | undefined;

  constructor(config: Auth0Config) {
    this.config = config;
    Object.freeze(this.config);
  }

  async initialize() {
    const { domain, clientId, authorizationParams } = this.config;
    this.client = await createAuth0Client({
      domain,
      clientId,
      authorizationParams,
    });

    if (
      window.location.search.includes('code=') ||
      window.location.search.includes('error=')
    ) {
      try {
        const result = await this.client!.handleRedirectCallback();
        console.log({ result });
      } catch (err: any) {
        const { error, error_description } = err;
        console.error('Error handling redirect callback:', {
          error,
          error_description,
        });
      }
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  async login() {
    console.log('login');
    return await this.client!.loginWithRedirect();
  }

  async logout() {
    this.client!.logout({
      openUrl(url) {
        window.location.replace(url);
      },
    });
  }

  async isAuthenticated() {
    return await this.client!.isAuthenticated();
  }

  async getAuthData() {
    const res = (await this.client!.isAuthenticated())
      ? await this.client!.getIdTokenClaims()
      : undefined;

    return res as unknown as Promise<Record<string, any>>;
  }

  async getAccessToken() {
    return await this.client!.getTokenSilently();
  }
}
