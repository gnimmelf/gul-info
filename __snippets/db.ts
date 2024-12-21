import Surreal, { surql } from "surrealdb";
import { awaitCondition } from "../src/lib/utils";

interface DbConfig {
  namespace: string
  database: string
  url: string
}

export class ApiService {
  private static instance: ApiService;

  private db = new Surreal()
  private config: DbConfig

  constructor(config: Partial<DbConfig> = {}) {
    this.config = Object.assign({
      url: "https://127.0.0.1:7999/rpc",
      namespace: "intergate",
      database: "gul-info",
    }, config)
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async connect() {
    if (!this.db.ready) {
      try {
        const { namespace, database } = this.config
        await this.db.connect(this.config.url, { namespace, database });
        await this.db.ready
      } catch (err) {
        console.error("Failed to connect to SurrealDB:", err instanceof Error ? err.message : String(err));
        await this.db.close();
        throw err;
      }
    }
    return 'connected'
  }

  async getListings() {
    await this.connect()
    const query = surql`SELECT * FROM Test;`
    return (await this.db.query(query)).pop()
  }
}