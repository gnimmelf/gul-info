import Surreal, { RecordId, StringRecordId } from 'surrealdb';
import { IDatabase } from '../IDatabase';
import { FilterSchemaType, TagsMatchType } from '~/shared/models/Filters';

import { UserViewSchemaType } from '~/shared/models/UserViewModel';
import { IndexLetterViewSchemaType } from '~/shared/models/IndexLetterViewModel';
import { ListingViewSchemaType } from '~/shared/models/listing/ListingViewModel';
import { TagViewSchemaType } from '~/shared/models/TagViewModel';
import { ListingSchemaType } from '~/shared/models/listing/Listing';
import { CreateListingDtoSchemaType } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDtoSchemaType } from '~/shared/models/listing/UpdateListingDto';

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

  async getUserData() {
    const query = `SELECT * FROM ${TABLES.USER};`;
    const res = pop<UserViewSchemaType>(await this.client.query(query), {
      popCount: 2,
      ensureArray: false,
    });
    return idObjToString(res);
  }

  async getIndexLetters() {
    const query = `SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM ${TABLES.LISTINGS} GROUP BY letter;`;
    const res = pop<IndexLetterViewSchemaType[]>(
      await this.client.query(query),
      { popCount: 1 },
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
    const res = pop<TagViewSchemaType[]>(await this.client.query(query), {
      popCount: 1,
    });
    return res.map(idObjToString);
  }

  async getListingsByFilters(filters?: FilterSchemaType) {
    let whereClause = '';
    const conditions: string[] = [];

    if (filters?.indexLetter) {
      conditions.push(
        `string::starts_with(string::lowercase(title), '${filters.indexLetter.toLocaleLowerCase()}')`,
      );
    }

    if (filters?.tagIds?.length) {
      const tagstr = filters.tagIds.map((key) => key).join(", ");
      if (filters.tagsMatchType === TagsMatchType.ALL) {
        conditions.push(
          `array::len(array::intersect(tags.id, [${tagstr}])) = ${filters.tagIds.length}`,
        );
      } else {
        conditions.push(`tags[WHERE id IN [${tagstr}]];`);
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

  async getListingsByEmail(email: string) {
    const query = `SELECT * FROM ${TABLES.LISTINGS} WHERE owner.email = '${email}';`;
    console.log({ query });
    const res = pop<ListingSchemaType[]>(await this.client.query(query));
    console.log({ res });
    return res.map(idObjToString);
  }

  async createListing(data: CreateListingDtoSchemaType) {
    const query = `fn::createListingsRecord($data);`;
    console.log({ query });
    const res = pop<ListingSchemaType>(
      await this.client.query(query, { data }),
    );
    return idObjToString(res);
  }

  async updateListing(data: UpdateListingDtoSchemaType) {
    const query = `fn::updateListingsRecord($data);`;
    console.log({ query, data });
    const res = pop<ListingSchemaType>(
      await this.client.query(query, { data }),
    );
    return idObjToString(res);
  }
}

/**
 * Utils
 */

type NestedArray<T> = T | NestedArray<T>[];
type PopOptions = {
  ensureArray?: boolean;
  popCount?: number;
};
/**
 * Popps from a nested array `count` times.
 * @param data flattenable array of n depth
 * @param count the number of times to pop
 * @returns last popped element of type <T>
 */
const pop = <T>(data: NestedArray<any>, options?: PopOptions): T => {
  let popCount = options?.popCount || 2;
  const ensureArray =
    options?.ensureArray === undefined ? true : options?.ensureArray;

  let res = data;
  while (popCount > 0 && Array.isArray(res) && res.length === 1) {
    res = res[0];
    popCount--;
  }
  console.log(
    res,
    ensureArray,
    !Array.isArray(res),
    ensureArray && !Array.isArray(res),
  );
  return ensureArray && !Array.isArray(res) ? ([res] as T) : res;
};

const idObjToString = <T>(obj: T & { id?: any }): T => {
  return obj.id !== undefined
    ? { ...obj, id: `${obj.id.tb}:${obj.id.id}` }
    : obj;
};
