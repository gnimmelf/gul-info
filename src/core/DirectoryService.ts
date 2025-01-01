import { checkLoadedData } from '../lib/form-utils';
import SurrealAdapter from '../adapters/SurrealDb';
import { createResource, createSignal, Resource } from 'solid-js';
import { zodSchemaDefaults } from '~/lib/utils';
import { StateGetter, StateSetter } from '~/types';
import {
  FiltersSchema,
  ProductListSchema,
  IndexListSchema,
  TagsSchema,
  TagList,
  Filters,
  ProductList,
  Repository,
  IndexList,
} from './repository';

/**
 * Class
 */
class DirectoryService {
  repo: Repository
  filters: StateGetter<Filters>
  setFilters: StateSetter<Filters>
  products: Resource<ProductList>
  indexLetters: Resource<IndexList>
  tags: Resource<TagList>

  constructor(
    repository: Repository,
  ) {
    this.repo = repository

      ;[this.filters, this.setFilters] = createSignal(zodSchemaDefaults(FiltersSchema))
      ;[this.products] = createResource(
        () => this.filters(),
        (filterValue) => this.loadListings(filterValue)
      )
      ;[this.indexLetters] = createResource(() => this.loadIndex())
      ;[this.tags] = createResource(() => this.loadTags())

  }

  async loadIndex() {
    const details = await this.repo.getIndex()
    checkLoadedData(IndexListSchema, details)
    return details
  }

  async loadTags() {
    const details = await this.repo.getTags()
    checkLoadedData(TagsSchema, details)
    return details
  }

  async loadListings(filters?: Filters): Promise<ProductList> {
    const details = await this.repo.getListings(filters)
    checkLoadedData(ProductListSchema, details)
    return details
  }
}

export default DirectoryService;
