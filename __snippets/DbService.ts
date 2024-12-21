import { z } from 'zod';
import { surql, Surreal } from "surrealdb";
import { awaitCondition, logError, unpackResult, zodSchemaDefaults } from "~/lib/utils";
import { StateCreator, StateGetter, StateSetter } from '~/types';

export const DbSchema = z.object({
  isConnected: z.boolean().default(false),
});

export type DbParams = {
  datapoint: string
  namespace: string
  database: string
}

export type DbState = z.infer<typeof DbSchema>;

/**
 * Class
 */
class ApiService {
  #db: Surreal;
  #url: string
  #namespace: string
  #database: string
  #setState: StateSetter<DbState>
  state: StateGetter<DbState>

  constructor(
    dbParams: DbParams,
    useState:StateCreator<DbState>
  ) {
    this.#db = new Surreal()
    this.#url = new URL(`${dbParams.datapoint}/rpc`).toString()
    this.#namespace = dbParams.namespace
    this.#database = dbParams.database

    const [state, setState] = useState(zodSchemaDefaults(DbSchema))
    this.#setState = setState
    this.state = state
  }

  async connect(): Promise<ApiService> {
    try {
      console.info("Connecting Surrealdb...")
      await this.#db.connect(this.#url)
      await this.#db.use({
        namespace: this.#namespace,
        database: this.#database,
      });
    } catch (error) {
      logError(error as Error)
      throw error;
    }
    this.#setState((prev) => ({
      ...prev,
      isConnected: true
    }))
    console.info(`ApiService connected: ${this.#database}@${this.#namespace}:${this.#url}`)
    console.log(this.#db)
    return this
  }

  async disconnect(): Promise<void> {
    if (this.#db.status === 'connected') {
      await this.#db.close();
    }
    this.#setState((prev) => ({
      ...prev,
      isConnected: false
    }))
  }

  async getDb(): Promise<Surreal> {
    await awaitCondition(() => this.state().isConnected && this.#db.status === 'connected')
    return this.#db
  }

  async validatePass(pass: string) {
    const query = surql`SELECT id FROM account WHERE pass = ${pass};`
    const result = await this.#db.query(query)
    return true
  }

  async deleteAccount() {
    const result = await this.#db.query('DELETE FROM account;')
    return true
  }

  async getAccountDetails() {
    try {
      const result = await this.#db.query('SELECT email FROM account;')
      return unpackResult(result)
    } catch (err) {
      throw err;
    }
  }

  async setAccountEmail(details: {
    pass: string
    email: string
  }) {
    console.log({ details })
    try {
      const result = await this.#db.query("UPDATE account MERGE $data", {
        pass: details.pass,
        data: {
          email: details.email,
        }
      });
      const data = unpackResult(result)
      if (!data) {
        throw new Error('Expected 1 row updated, got zero')
      }
    } catch (err) {
      throw err;
    }
  }

  async setAccountPassword(details: {
    pass: string
    newPass: string
  }) {
    console.log({ details })
    try {
      const result = await this.#db.query("UPDATE account MERGE $data", {
        pass: details.pass,
        data: {
          pass: details.newPass
        }
      });
      const data = unpackResult(result)
      if (!data) {
        throw new Error('Expected 1 row updated, got zero')
      }
    } catch (err) {
      throw err;
    }
  }

  async getProfileDetails() {
    try {
      const result = await this.#db.query('SELECT firstName, lastName, address, phone FROM profile;')
      return unpackResult(result)
    } catch (error) {
      throw error;
    }
  }

  async setProfileDetails<T>(details: T) {
    try {
      await this.#db.merge<any, any>('profile', details)
    } catch (err) {
      throw err;
    }
  }


}

export default ApiService