import { z } from 'zod';

import { checkLoadedData } from '../lib/form-utils';
import ApiService from './ApiService';
import { StateCreator, StateGetter, StateSetter } from '../types';

export const CompanySchema = z.object({
  address: z.string(),
  description: z.string(),
  email: z.string().email(),
  id: z.object({
    tb: z.string(),
    id: z.string(),
  }),
  isActive: z.boolean(),
  links: z.array(
    z.object({
      href: z.string(),
    })
  ),
  muncipiality: z.string(),
  phone: z.string(), // Can use z.string().regex(/^\d+$/) for stricter validation of numbers
  tags: z.array(
    z.object({
      key: z.string(),
      name: z.string(),
    })
  ),
  title: z.string(),
  zip: z.string(), // Can use z.string().regex(/^\d{4}$/) if the zip code is always 4 digits
});

// Make `undefined` a valid default value
const DirectorySchema = z.array(CompanySchema).optional()

export type DirectoryState = z.infer<typeof DirectorySchema>;

interface Filters { }

/**
 * Class
 */
class DirectoryService {
  #apiService: ApiService

  constructor(
    apiService: ApiService,
  ) {
    this.#apiService = apiService
  }

  async loadData(filters?: Filters): Promise<DirectoryState> {
    const details = await this.#apiService.fetchListings(filters) as DirectoryState
    checkLoadedData(DirectorySchema, details)
    return details
  }
}

export default DirectoryService;
