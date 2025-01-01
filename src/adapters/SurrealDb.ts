import Surreal, { surql } from "surrealdb";
import { Repository, Filters, IndexList, ProductList, TagList } from "../core/repository";

interface DbConfigArg {
  namespace: string
  database: string
  datapoint: string
}

type DbConfig = {
  namespace: string
  database: string
  url: string
}

const TB_LISTINGS = 'listings'

/**
 * Method decorator to Ensure connection
 * @param target
 * @param propertyKey
 * @param descriptor
 */
function Connect(
  _target: any,
  _propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<any>
): void {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    // Ensure `this` is properly typed
    const self = this as any;
    await self.connect();

    // Proceed with the original method
    return originalMethod.apply(this, args);
  };
}

export class SurrealAdapter implements Repository {
  private db = new Surreal()
  public config: DbConfig

  constructor(config: DbConfigArg) {
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

  private async connect(options = { resetError: false }) {
    if ('connecting' === this.db.status) {
      await this.db.ready
    }
    else if ('disconnected' === this.db.status || options.resetError) {
      try {
        const { url, namespace, database } = this.config
        await this.db.connect(url, { namespace, database });
      } catch (err) {
        console.error("Failed to connect to SurrealDB:", err instanceof Error ? err.message : String(err));
        await this.db.close();
        throw err;
      }
    }
    else if ('error' === this.db.status) {
      throw new Error('Not connected to SurrealDb')
    }
    return this.db.status
  }

  async authenticate(token: string) { }
  async signup() { }
  async signin() { }
  async invalidate() { }

  @Connect
  async getListings(filters?: Filters) {

    let whereClause ='';
    const conditions = []
    if (filters?.letter) {
      conditions.push(`string::starts_with(string::lowercase(title), '${filters.letter.toLocaleLowerCase()}')`)
    }

    if (filters?.tag) {
      conditions.push(`tags[WHERE key = '${filters.tag}']`)
    }

    if (conditions.length) {
      whereClause = ` WHERE ${conditions.join(' AND ')}`
    }

    const query = `SELECT *, tags.*.* FROM ${TB_LISTINGS}${whereClause};`

    const res = (await this.db.query<[ProductList]>(query)).pop()!
    return res
  }

  @Connect
  async getIndex() {
    const query = `SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM ${TB_LISTINGS} GROUP BY letter;`
    const res = (await this.db.query<[IndexList]>(query)).pop()!
    return res
  }

  @Connect
  async getTags() {
    const query = `SELECT *, count(
      SELECT id
      FROM listings
      WHERE $parent.id INSIDE tags
    ) as usages
    FROM tags;`
    const res = (await this.db.query<[TagList]>(query)).pop()!
    return res
  }
}

export default SurrealAdapter