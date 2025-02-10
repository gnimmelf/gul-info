import { Accessor, createMemo, createResource, createSignal } from 'solid-js';

import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { checkAdapterReturnType } from './checkAdapterReturnType';
import { ListingsService } from '~/domains/ui/listings/ListingsService';
import { UserViewModel } from '~/shared/models/UserViewModel';
import { FilterSchemaType } from '~/shared/models/Filters';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDto } from '~/shared/models/listing/UpdateListingDto';
import { deepCopy } from '~/shared/lib/utils';

export const createListingsServiceAdaper = (
  db: IDatabase,
  user: Accessor<UserViewModel | undefined>,
) => {
  const listingService = new ListingsService(db);

  const [onSaveListing, setSaveListing] = createSignal<
    CreateListingDto | UpdateListingDto | null
  >(null);

  const [onFilterListings, setFilterListings] =
    createSignal<FilterSchemaType | null>(null, {
      equals: false,
    });

  const [filteredListings, { mutate: mutateFilteredListings }] = createResource(
    // `createResource`-source signal has own memoization, shallow comparison, which is not
    // exposed, so re-wrap the data in a new object to bypass that:
    () => ({ filters: onFilterListings() }),
    async ({ filters }) => {
      console.log('onFilterListings', { filters });
      const listings = await listingService.loadListingsByFilters(filters!);
      return listings;
    },
  );

  const [myListings, { mutate: mutateMyListings }] = createResource(
    user,
    async ({ email }) => {
      const listings = await listingService.loadListingsByEmail(email);
      return listings;
    },
  );

  const [saveListing] = createResource(onSaveListing, async (listingDto) => {
    /**
     * TODO! Implement refetching of invalid resources
     * when listings is updated / created, what needs to be refreshed, and how?
     */
    let res;
    if (listingDto instanceof CreateListingDto) {
      res = listingService.createListing(listingDto);
    } else if (listingDto instanceof UpdateListingDto) {
      res = listingService.updateListing(listingDto);
    }
    return res;
  });

  const adapter = checkAdapterReturnType({
    resources: {
      filteredListings,
      myListings,
      saveListing,
    },
    saveListing: setSaveListing,
    filterListings: setFilterListings,
  });

  return adapter;
};
