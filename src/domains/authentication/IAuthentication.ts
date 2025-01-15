export interface IAuthentication {
  login: () => void;
  logout: () => void;
  isAuthenticated: () => Promise<boolean>;
  getAccessToken: () => Promise<string>;
  initialize?: () => void;
  getAuthData?: () => Promise<Record<string, any>>;
}
