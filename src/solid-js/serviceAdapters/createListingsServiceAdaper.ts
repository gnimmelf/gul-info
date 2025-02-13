import { Accessor, createResource, createSignal } from 'solid-js';

import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { checkAdapterReturnType } from './checkAdapterReturnType';
import { ListingsService } from '~/domains/ui/listings/ListingsService';
import { UserViewModel } from '~/shared/models/UserViewModel';
import { FilterSchemaType } from '~/shared/models/Filters';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDto } from '~/shared/models/listing/UpdateListingDto';

export const createListingsServiceAdaper = (
  db: IDatabase,
  user: Accessor<UserViewModel | undefined>,
) => {
  const listingService = new ListingsService(db);

  const [onSaveListing, setSaveListing] = createSignal<
    CreateListingDto | UpdateListingDto | null
  >();

  const [onDeleteListing, setDeleteListing] =createSignal<string>();

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
    // TODO! Implement refetching of stale resources
    let res;
    if (listingDto instanceof CreateListingDto) {
      res = listingService.createListing(listingDto);
    } else if (listingDto instanceof UpdateListingDto) {
      res = listingService.updateListing(listingDto);
    }
    return res;
  });

  const [deleteListing] = createResource(onDeleteListing, async (listingId) => {
    // TODO! Implement refetching of stale resources
    const res = listingService.deleteListing(listingId);
    setDeleteListing();
    return res;
  });

  const adapter = checkAdapterReturnType({
    resources: {
      filteredListings,
      myListings,
      saveListing,
      deleteListing
    },
    saveListing: setSaveListing,
    deleteListing: setDeleteListing,
    filterListings: setFilterListings,
  });

  return adapter;
};
