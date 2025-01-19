import { IAuthData } from './infrastructure/Auth0Adapter';

export interface IAuthentication {
  login: () => void;
  logout: () => void;
  isAuthenticated: () => Promise<boolean>;
  getAccessToken: () => Promise<string>;
  initialize?: () => void;
  getAuthData?: () => Promise<IAuthData>;
}
