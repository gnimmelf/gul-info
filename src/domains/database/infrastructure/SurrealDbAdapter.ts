import Surreal from 'surrealdb';
import { UserSchemaType } from '~/domains/account/User';
import { IDatabase } from '~/domains/database/IDatabase';
import { TFilterState } from '~/domains/directory/Filters';
import { IndexLetterSchemaType } from '~/domains/directory/IndexLetter';
import { ListingSchemaType } from '~/domains/directory/Listing';
import { TagSchemaType } from '~/domains/directory/Tag';

type NestedArray<T> = T | NestedArray<T>[];
/**
 * Popps from a nested array `count` times.
 * @param data flattenable array of n depth
 * @param count the number of times to pop
 * @returns last popped element of type <T>
 */
export const pop = <T>(data: NestedArray<any>, count = 1): T => {
  let tmp = data;
  while (count > 0 && Array.isArray(tmp) && tmp.length === 1) {
    tmp = tmp[0];
    count--;
  }
  return tmp;
};

export interface SurrealConfig {
  namespace: string;
  database: string;
  url: string;
}

enum TABLES {
  LISTINGS = 'listings',
  USER = 'user',
}

/**
 * Class
 */
export class SurrealDbAdapter implements IDatabase {
  private config: SurrealConfig;
  private client = new Surreal();

  constructor(config: SurrealConfig) {
    const { namespace, database, url } = config;
    this.config = {
      namespace,
      database,
      url,
    };
    Object.freeze(this.config);
  }

  async initialize() {
    const { url, namespace, database } = this.config;
    try {
      await this.client.connect(url, {
        namespace,
        database,
      });
    } catch (err) {
      console.error(
        'Failed to connect to SurrealDB:',
        err instanceof Error ? err.message : String(err),
      );
      await this.client.close();
      throw err;
    }
  }

  async getListings(filters?: TFilterState) {
    let whereClause = '';
    const conditions: string[] = [];

    if (filters?.indexLetter) {
      conditions.push(
        `string::starts_with(string::lowercase(title), '${filters.indexLetter.toLocaleLowerCase()}')`,
      );
    }

    if (filters?.tagKeys?.length) {
      const tagstr = filters.tagKeys.map((key) => key).join("', '");
      conditions.push(`tags[WHERE key ALLINSIDE ['${tagstr}']]`);
    }

    if (conditions.length) {
      whereClause = ` WHERE ${conditions.join(' AND ')}`;
    }

    const query = `SELECT *, tags.*.* FROM ${TABLES.LISTINGS}${whereClause};`;
    console.log({ query });
    const res = pop<ListingSchemaType[]>(await this.client.query(query));
    return res;
  }

  async getIndexLetters() {
    const query = `SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM ${TABLES.LISTINGS} GROUP BY letter;`;
    const res = pop<IndexLetterSchemaType[]>(await this.client.query(query));
    return res;
  }

  async getTags() {
    const query = `
      SELECT *, count(
        SELECT id
        FROM listings
        WHERE $parent.id INSIDE tags
      ) as usageCount
      FROM tags;
    `;
    const res = pop<TagSchemaType[]>(await this.client.query(query));
    return res;
  }

  async authenticate(token: string, failSilently: boolean) {
    let res = false;
    try {
      res = await this.client.authenticate(token);
    } catch (err: any) {
      if (!failSilently) {
        console.error(err.message);
      }
    }
    return res;
  }

  async getUserData() {
    const query = `SELECT * FROM ${TABLES.USER};`;
    const res = pop<UserSchemaType>(await this.client.query(query), 2);
    return res;
  }
}
