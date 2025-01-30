import { Accessor, createMemo, createResource, createSignal } from 'solid-js';

import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { checkAdapterReturnType } from './checkAdapterReturnType';
import { Listing } from '~/shared/models/listing/Listing';
import { withReactiveState } from './withReactiveState';
import { ListingPayload } from './ListingPayload';
import { CRUD_MODES } from '../lib/enums';
import { ListingsService } from '~/domains/ui/listings/ListingsService';
import { UserViewModel } from '~/shared/models/UserViewModel';
import { Filters, FilterSchemaType } from '~/shared/models/Filters';

export const createListingsServiceAdaper = (
  db: IDatabase,
  user: Accessor<UserViewModel | undefined>,
) => {
  const service = new ListingsService(db);

  const [onSaveListing, setSaveListing] = createSignal<ListingPayload | null>(null);
  const [onFilterListings, setFilterListings] = createSignal<FilterSchemaType | null>(null);

  const [filteredListings, { mutate: mutateFilteredListings }] = createResource(
    onFilterListings,
    async (filters) => {
      console.log({ filters })
      const listings = await service.loadListingsByFilters(filters);
      return listings;
    },
  );

  const [myListings, { mutate: mutateMyListings }] = createResource(
    user,
    async ({ email }) => {
      const listings = await service.loadListingsByEmail(email);
      return listings
    },
  );

  const [saveListing] = createResource(
    onSaveListing,
    async (listingPayload) => {
      console.log({ listingPayload })
      const { mode, data } = listingPayload;
      /**
       * TODO!
       * When listings is updated / created, what needs to be refreshed, and how?
       */
      let res;
      if (CRUD_MODES.CREATE === mode) {
        res = db.createListing(data)
      }
      else if (CRUD_MODES.UPDATE === mode) {
        res = db.updateListing(data)
      }
    }
  )

  const adapter = checkAdapterReturnType({
    resources: {
      filteredListings,
      myListings,
      saveListing
    },
    saveListing: setSaveListing,
    filterListings: setFilterListings
  });

  return adapter;
};
