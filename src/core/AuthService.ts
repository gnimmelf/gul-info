import { z } from 'zod';
import SurrealAdapter from '../adapters/SurrealDb';
import { logError, zodSchemaDefaults } from '../lib/utils';
import { StateCreator, StateGetter, StateSetter } from '../types';
import { email, pass } from '../lib/form-utils';

export const AuthSchema = z.object({
  isAuthenticated: z.boolean().default(false),
});

export const CredentialsSchema = z.object({
  email: email.default(''),
  pass: pass.default(''),
});

export type AuthParams = {
  namespace: string
  database: string
}

export type Credentials = {
  email: string;
  pass: string;
};

export type AuthState = z.infer<typeof AuthSchema>;

/**
 * Class
 */
class AuthService {
  repo: Repository
  #accessToken: string
  #setState: StateSetter<AuthState>
  state: StateGetter<AuthState>

  constructor(
    repository: SurrealAdapter,
    useState: StateCreator<AuthState>
  ) {
    this.repo = repository
    this.#accessToken = ''

    const [state, setState] = useState(zodSchemaDefaults(AuthSchema))
    this.#setState = setState
    this.state = state
  }

  #storeAccessToken() {
    localStorage.accessToken = this.#accessToken
  }

  get #isAuthenticated(): boolean {
    return !!this.#accessToken && this.repo.isConnected
  }

  async authenticate() {
    if (localStorage.accessToken) {
      this.#accessToken = localStorage.accessToken
      try {
        console.info('Authenticating token from localStorage...')
        await this.repo.authenticate(this.#accessToken)
      } catch (error) {
        logError(error as Error)
        return this.signout();
      }
      this.#setState((prev) => ({
        ...prev,
        isAuthenticated: this.#isAuthenticated
      }))
    }
  }

  async signup(credentials: Credentials) {
    try {
      this.#accessToken = await this.repo.signup({
        email: credentials.email,
        pass: credentials.pass,
      })
    } catch (err) {
      throw err;
    }
    this.#storeAccessToken()
    this.#setState((prev) => ({
      ...prev,
      isAuthenticated: this.#isAuthenticated
    }))
  }

  async signin(credentials: Credentials) {
    try {
      this.#accessToken = await this.repo.signin({
        email: credentials.email,
        pass: credentials.pass,
      })
    } catch (err) {
      throw err;
    }
    this.#storeAccessToken()
    this.#setState((prev) => ({
      ...prev,
      isAuthenticated: this.#isAuthenticated
    }))
  }

  async signout() {
    this.#accessToken = ''
    this.#storeAccessToken()
    await this.repo.invalidate()
    this.#setState((prev) => ({
      ...prev,
      isAuthenticated: this.#isAuthenticated
    }))
  }
}

export default AuthService;
