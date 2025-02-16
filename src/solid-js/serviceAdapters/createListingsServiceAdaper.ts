import { Accessor, createResource, createSignal } from 'solid-js';

import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { checkAdapterReturnType } from './checkAdapterReturnType';
import { ListingsService } from '~/domains/ui/listings/ListingsService';
import { UserViewModel } from '~/shared/models/UserViewModel';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDto } from '~/shared/models/listing/UpdateListingDto';
import { ResourceRegistry } from '../lib/ResourceRegistry';
import { Listing } from '~/shared/models/listing/Listing';

export const createListingsServiceAdaper = (
  db: IDatabase,
  user: Accessor<UserViewModel | undefined>,
  resources: ResourceRegistry,
) => {
  const listingService = new ListingsService(db);

  const [onCreateListing, setCreateListing] = createSignal<CreateListingDto>();

  const [onUpdateListing, setUpdateListing] = createSignal<UpdateListingDto>();

  const [onDeleteListing, setDeleteListing] = createSignal<UpdateListingDto>();

  const [tags] = createResource(async () => {
    const tags = await listingService.loadTags();
    return tags;
  });

  const myListings = resources.add(
    'loadListingByEmail',
    createResource(user, async ({ email }) => {
      const listings = await listingService.loadListingsByEmail(email);
      return listings;
    }),
  );

  const [createdListing] = createResource(onCreateListing, async (listingDto) => {
    const createdListing = await listingService.createListing(
      listingDto as CreateListingDto,
    );
    resources.get('loadListingByEmail').refetch();
    resources.get('loadTagUsages').refetch();
    return createdListing;
  });

  const [updatedListing] = createResource(onUpdateListing, async (listingDto) => {
    const updatedListing = await listingService.updateListing(
      listingDto as UpdateListingDto,
    );
    resources.get('loadListingByEmail').refetch();
    resources.get('loadTagUsages').refetch();
    return updatedListing;
  });

  const [deletedListing] = createResource(onDeleteListing, async (listingDto) => {
    const deletedListing = await listingService.deleteListing(listingDto);
    resources.get('loadListingByEmail').refetch();
    resources.get('loadTagUsages').refetch();
    return deletedListing;
  });

  const adapter = checkAdapterReturnType({
    resources: {
      tags,
      myListings,
      createdListing,
      updatedListing,
      deletedListing,
    },
    createListing: setCreateListing,
    updateListing: setUpdateListing,
    deleteListing: setDeleteListing,
  });

  return adapter;
};
