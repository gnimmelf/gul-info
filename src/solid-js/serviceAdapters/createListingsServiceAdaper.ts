import { Accessor, createResource, createSignal } from 'solid-js';

import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { checkAdapterReturnType } from './checkAdapterReturnType';
import { ListingsService } from '~/domains/ui/listings/ListingsService';
import { UserViewModel } from '~/shared/models/UserViewModel';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDto } from '~/shared/models/listing/UpdateListingDto';
import { ResourceRegistry } from '../lib/ResourceRegistry';

export const createListingsServiceAdaper = (
  db: IDatabase,
  user: Accessor<UserViewModel | undefined>,
  resources: ResourceRegistry
) => {
  const listingService = new ListingsService(db);

  const [onSaveListing, setSaveListing] = createSignal<
    CreateListingDto | UpdateListingDto | null
  >();

  const [onDeleteListing, setDeleteListing] = createSignal<string>();

  const [tags] = createResource(async() => {
    const tags = await listingService.loadTags()
    return tags
  })

  const myListings = resources.add('loadListingByEmail', createResource(
    user,
    async ({ email }) => {
      const listings = await listingService.loadListingsByEmail(email);
      return listings;
    },
  ));

  const [saveListing] = createResource(onSaveListing, async (listingDto) => {
    let res;
    if (listingDto instanceof CreateListingDto) {
      res = await listingService.createListing(listingDto);
    } else if (listingDto instanceof UpdateListingDto) {
      res = await listingService.updateListing(listingDto);
    }
    resources.get('loadListingByEmail').refetch()
    return res;
  });

  const [deleteListing] = createResource(onDeleteListing, async (listingId) => {
    const res = listingService.deleteListing(listingId);
    setDeleteListing();
    resources.get('loadListingByEmail').refetch()
    return res;
  });

  const adapter = checkAdapterReturnType({
    resources: {
      tags,
      myListings,
      saveListing,
      deleteListing,
    },
    saveListing: setSaveListing,
    deleteListing: setDeleteListing,
  });

  return adapter;
};
