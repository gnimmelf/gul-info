import { z } from 'zod';

import { checkLoadedData } from '../lib/form-utils';
import ApiService from './ApiService';
import { createResource, createSignal, Resource, Signal } from 'solid-js';
import { zodSchemaDefaults } from '~/lib/utils';
import { StateGetter, StateSetter } from '~/types';

export const ListingSchema = z.object({
  isActive: z.boolean(),
  title: z.string(),
  description: z.string(),
  address: z.string(),
  muncipiality: z.string(),
  zip: z.string().regex(/^\d{4}$/),
  phone: z.string(), // TODO! Get from '~/lib/form-utils
  email: z.string().email(), // TODO! Get from '~/lib/form-utils
  id: z.object({
    tb: z.string(),
    id: z.string(),
  }),
  links: z.array(
    z.object({
      href: z.string(),
    })
  ),
  tags: z.array(
    z.object({
      key: z.string(),
      name: z.string(),
    })
  )
});

const ListingsSchema = z.array(ListingSchema)

export const FilterSchema = z.object({
  letter: z.string().length(1).optional(),
  tag: z.string().optional(),
  text: z.string().optional(),
})

export const LetterSchema = z.object({
  letter: z.string().length(1).optional(),
  count: z.number()
})

export const LettersSchema = z.array(LetterSchema)

export type ListingsState = z.infer<typeof ListingsSchema>;
export type LettersState = z.infer<typeof LettersSchema>;
export type FilterState = z.infer<typeof FilterSchema>;


/**
 * Class
 */
class DirectoryService {
  #apiService: ApiService
  filters: StateGetter<FilterState>
  setFilters: StateSetter<FilterState>
  listings: Resource<ListingsState>

  constructor(
    apiService: ApiService,
  ) {
    this.#apiService = apiService
      ;[this.filters, this.setFilters] = createSignal(zodSchemaDefaults(FilterSchema))
      ;[this.listings] = createResource(
        () => this.filters(),
        (filterValue) => this.loadListings(filterValue)
      )
  }

  async loadListingLetters() {
    const details = await this.#apiService.fetchListingLetters() as LettersState
    checkLoadedData(LettersSchema, details)
    return details
  }

  async loadListings(filters?: FilterState): Promise<ListingsState> {
    // TODO! Querybuilder
    const whereClause = JSON.stringify(filters)
    const details = await this.#apiService.fetchListings(whereClause) as ListingsState
    checkLoadedData(ListingsSchema, details)
    return details
  }
}

export default DirectoryService;
