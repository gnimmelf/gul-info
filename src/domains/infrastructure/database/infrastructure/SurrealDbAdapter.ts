import Surreal, { StringRecordId } from 'surrealdb';
import { IDatabase } from '../IDatabase';
import { Filters, TagsMatchType } from '~/shared/models/Filters';

import { Listing } from '~/shared/models/listing/Listing';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDto } from '~/shared/models/listing/UpdateListingDto';
import { UserViewModel } from '~/shared/models/UserViewModel';
import { IndexLetterViewModel } from '~/shared/models/IndexLetterViewModel';
import { TagViewModel } from '~/shared/models/TagViewModel';

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
    return stringifyIds(res);
  }

  async getUserData() {
    const query = `SELECT * FROM ${TABLES.USER};`;
    const res = pop<UserViewModel.SchemaType>(await this.client.query(query), {
      popCount: 2,
      ensureArray: false,
    });
    return stringifyIds(res);
  }

  async getIndexLetterUsages() {
    const query = `SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM ${TABLES.LISTINGS} GROUP BY letter;`;
    const res = pop<IndexLetterViewModel.SchemaType[]>(await this.client.query(query), {
      popCount: 1,
    });
    return stringifyIds(res);
  }

  async getTags() {
    const query = `SELECT * FROM tags;`;
    const res = pop<TagViewModel.SchemaType[]>(await this.client.query(query), {
      popCount: 1,
    });
    return stringifyIds(res);
  }

  async getTagUsages() {
    const query = `
      SELECT *, count(
        SELECT id
        FROM listings
        WHERE $parent.id INSIDE tags
      ) as usageCount
      FROM tags;
    `;
    const res = pop<TagViewModel.SchemaType[]>(await this.client.query(query), {
      popCount: 1,
    });
    return stringifyIds(res);
  }

  async getListingsByFilters(filters?: Filters.SchemaType) {
    let whereClause = '';
    const conditions: string[] = ['isActive = true'];

    if (filters?.indexLetter) {
      conditions.push(
        `string::starts_with(string::lowercase(title), '${filters.indexLetter.toLocaleLowerCase()}')`,
      );
    }

    if (filters?.tagIds?.length) {
      const tagstr = filters.tagIds.map((key) => key).join(', ');
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
    const res = pop<Listing.SchemaType[]>(await this.client.query(query));
    return stringifyIds(res);
  }

  async getListingsByEmail(email: string) {
    const query = `SELECT * FROM ${TABLES.LISTINGS} WHERE owner.email = '${email}';`;
    const res = pop<Listing.SchemaType[]>(await this.client.query(query));
    return stringifyIds(res);
  }

  async createListing(data: CreateListingDto.SchemaType) {
    const { owner, tags, ...rest } = data;
    const payload = {
      ...rest,
      owner: new StringRecordId(owner),
      tags: tags.map((tagId: string) => new StringRecordId(tagId)),
    };

    const [listing] = await this.client.create<CreateListingDto.SchemaType>(
      'listings',
      payload,
    );
    return stringifyIds(listing);
  }

  async deleteListing(listingId: string) {
    await this.client.delete(new StringRecordId(listingId));
  }

  async updateListing(data: UpdateListingDto.SchemaType) {
    const { id, owner, tags, ...rest } = data;
    const payload = {
      ...rest,
      owner: new StringRecordId(owner),
      tags: tags.map((tagId) => new StringRecordId(tagId)),
    };

    const listing = await this.client.merge<UpdateListingDto.SchemaType>(
      new StringRecordId(id),
      payload,
    );
    return stringifyIds(listing);
  }
}

/**
 * SurrealDb utils
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
  const ensureArray = options?.ensureArray === undefined ? true : options?.ensureArray;

  let res = data;
  while (popCount > 0 && Array.isArray(res) && res.length === 1) {
    res = res[0];
    popCount--;
  }
  return ensureArray && !Array.isArray(res) ? ([res] as T) : res;
};

/**
 * SurrealDb has a complex concept of record ids as objects.
 * These object can be stringified. Since results may have record ids
 * deep in the results, the simplest way to stringify all record ids is to
 * JSON-stringify the result object,then re-parse it back to an object.
 * @param res Surrealdb result
 * @returns obj with surreal record-ids stringified
 */
const stringifyIds = (res: any) => {
  const parsed = JSON.parse(JSON.stringify(res));
  console.log({ res, parsed });
  return parsed;
};
