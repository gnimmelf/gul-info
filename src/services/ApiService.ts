import Surreal, { surql } from "surrealdb";
import { logError, zodSchemaDefaults } from '../lib/utils';
import { StateCreator, StateGetter, StateSetter } from '../types';

interface DbConfig {
  namespace: string
  database: string
  datapoint: string
}

type DbConfigType = {
  namespace: string
  database: string
  url: string
}

export type ApiState = boolean | undefined

export class ApiService {
  private db = new Surreal()
  private setState: StateSetter<ApiState>
  public state: StateGetter<ApiState>

  public config: DbConfigType

  constructor(config: DbConfig, useState: StateCreator<ApiState>) {
    const [state, setState] = useState(undefined)
    this.setState = setState
    this.state = state

    const {
      namespace,
      database,
      datapoint,
    } = config

    this.config = {
      namespace,
      database,
      url: new URL(`${datapoint}/rpc`).href
    }
    Object.freeze(this.config)
  }

  async connect(options = { resetError: false }) {
    if ('connecting' === this.db.status) {
      await this.db.ready
    }
    else if ('disconnected' === this.db.status || options.resetError) {
      try {
        const { url, namespace, database } = this.config
        await this.db.connect(url, { namespace, database });
        this.setState(true)
      } catch (err) {
        console.error("Failed to connect to SurrealDB:", err instanceof Error ? err.message : String(err));
        this.setState(false)
        await this.db.close();
        throw err;
      }
    }
    else if ('error' === this.db.status) {
      throw new Error('Not connected to SurrealDb')
    }
    return this.db.status
  }

  async authenticate(token: string) {}
  async signup() {}
  async signin() {}
  async invalidate() {}

  async getListings() {
    await this.connect() // Make this into a decorator, use for all apis
    const query = surql`SELECT * FROM Listings;`
    return (await this.db.query(query)).pop()
  }
}

export default ApiService