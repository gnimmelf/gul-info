import Surreal, { RecordId } from 'surrealdb';
import { IDatabase } from '../IDatabase';
import { TFilterState, TagsMatchType } from '~/domains/ui/directory/Filters';

import { UserViewSchemaType } from '~/domains/ui/account/UserViewModel';
import { IndexLetterViewSchemaType } from '~/domains/ui/directory/IndexLetterViewModel';
import { ListingViewSchemaType } from '~/domains/ui/directory/ListingViewModel';
import { TagViewSchemaType } from '~/domains/ui/directory/TagViewModel';
import { ListingSchemaType } from '~/domains/ui/account/Listing';
import { CreateListingDtoSchemaType } from '~/domains/ui/account/CreateListingDto';

export interface SurrealConfig {
  namespace: string;
  database: string;
  url: string;
}

enum TABLES {
  LISTINGS = 'listings',
  USER = 'users',
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

  // TODO! Methods below should be inside own features, getting passed the `client`

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
      if (filters.tagsMatchType === TagsMatchType.ALL) {
        conditions.push(
          `array::len(array::intersect(tags.key, ['${tagstr}'])) = ${filters.tagKeys.length}`,
        );
      } else {
        conditions.push(`tags[WHERE key IN ['${tagstr}']];`);
      }
    }

    if (conditions.length) {
      whereClause = ` WHERE ${conditions.join(' AND ')}`;
    }

    const query = `SELECT *, tags.*.* FROM ${TABLES.LISTINGS}${whereClause};`;
    console.log({ query });
    const res = pop<ListingViewSchemaType[]>(await this.client.query(query));
    return res.map(idObjToString);
  }

  async getIndexLetters() {
    const query = `SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM ${TABLES.LISTINGS} GROUP BY letter;`;
    const res = pop<IndexLetterViewSchemaType[]>(
      await this.client.query(query),
    );
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
    console.log({ query });
    const res = pop<TagViewSchemaType[]>(await this.client.query(query));
    return res.map(idObjToString);
  }

  async getUserData() {
    const query = `SELECT * FROM ${TABLES.USER};`;
    console.log({ query });
    const res = pop<UserViewSchemaType>(await this.client.query(query), 2);
    return idObjToString(res);
  }

  async getListingsByEmail(email: string) {
    const query = `SELECT * FROM ${TABLES.LISTINGS} WHERE owner.email = '${email}';`;
    console.log({ query });
    const res = pop<ListingSchemaType[]>(await this.client.query(query), 2);
    return res.map(idObjToString);
  }

  async createListing(data: CreateListingDtoSchemaType) {
    const query = `;`;
    console.log({ query });
    const res = pop<ListingSchemaType[]>(await this.client.query(query), 2);
    return res.map(idObjToString);
  }
}

/**
 * Utils
 */

type NestedArray<T> = T | NestedArray<T>[];
/**
 * Popps from a nested array `count` times.
 * @param data flattenable array of n depth
 * @param count the number of times to pop
 * @returns last popped element of type <T>
 */
const pop = <T>(data: NestedArray<any>, count = 1): T => {
  let res = data;
  while (count > 0 && Array.isArray(res) && res.length === 1) {
    res = res[0];
    count--;
  }
  return res;
};

const idObjToString = <T>(obj: T & { id?: any }): T => {
  return obj.id !== undefined
    ? {...obj,id: `${obj.id.tb}:${obj.id.id}` }
    : obj
}