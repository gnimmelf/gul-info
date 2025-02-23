import { createResource, createSignal } from 'solid-js';

import { Filters, TagsMatchType } from '../../shared/models/Filters';
import { DirectoryService } from '../../domains/ui/directory/DirectoryService';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { checkAdapterReturnType } from './checkAdapterReturnType';
import { createMutable } from 'solid-js/store';
import { ResourceRegistry } from '../lib/ResourceRegistry';

export const createDirectoryServiceAdapter = async (
  db: IDatabase,
  resources: ResourceRegistry,
) => {
  const filters = createMutable(
    Filters.from({
      tagsMatchType: TagsMatchType.ANY,
    }),
  );

  const directoryService = new DirectoryService(db);

  const [onFilterListings, setFilterListings] = createSignal<Filters.SchemaType | null>(
    null,
    {
      equals: false,
    },
  );

  const [filteredListings, { mutate: mutateFilteredListings }] = createResource(
    // `createResource`-source signal has own memoization, shallow comparison, which is not
    // exposed, so re-wrap the data in a new object to bypass that:
    () => ({ filters: onFilterListings() }),
    async ({ filters }) => {
      console.log('onFilterListings', { filters });
      const listings = await directoryService.loadListingsByFilters(filters!);
      return listings;
    },
  );

  const tags = resources.add(
    'loadTagUsages',
    createResource(() => directoryService.loadTagUsages()),
  );

  const [indexLetters] = createResource(() => directoryService.loadIndexLetterUsages());

  const adapter = checkAdapterReturnType({
    resources: {
      tags,
      indexLetters,
      filteredListings,
    },
    filters,
    filterListings: setFilterListings,
  });

  return adapter;
};
