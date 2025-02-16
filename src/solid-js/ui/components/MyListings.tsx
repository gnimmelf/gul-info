import { Component, createEffect, createSignal, For, Show, Suspense } from 'solid-js';

import { addCss, Theme } from '~/shared/ui/theme';
import { MAX_LISTINGS } from '~/shared/constants';

import { useService } from '~/solid-js/ui/providers/ServiceProvider';

import { Loading } from './Loading';
import { ListingForm } from '../components/ListingForm';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { Listing } from '~/shared/models/listing/Listing';
import { UpdateListingDto } from '~/shared/models/listing/UpdateListingDto';

const css = addCss({
  listings: (theme: Theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.gapMd,
    marginBottom: theme.gapMd,
  }),
  userMessage: (theme: Theme) => ({
    marginBottom: theme.gapMd,
  }),
});

export const MyListings: Component<{}> = (props) => {
  const { listings, account } = useService();

  const [isDirty, setIsDirty] = createSignal(false);
  const [userMessage, setUserMessage] = createSignal<{
    action: string;
    title: string;
  } | null>(null);
  const [activeListing, _setActiveListing] = createSignal<
    CreateListingDto | UpdateListingDto | null
  >(null);

  const myListings = () => listings()?.resources.myListings();

  createEffect(() => {
    const listing = listings()?.resources.createdListing();
    if (listing) {
      editListing(listing);
      setUserMessage({ action: 'created', title: listing.title });
    }
  });

  createEffect(() => {
    const listing = listings()?.resources.updatedListing();
    if (listing) {
      editListing(listing);
      setUserMessage({ action: 'updated', title: listing.title });
    }
  });

  createEffect(() => {
    const listing = listings()?.resources.deletedListing();
    if (listing) {
      clearActiveListing();
      setUserMessage({ action: 'deleted', title: listing.title });
    }
  });

  function clearActiveListing() {
    _setActiveListing(null);
    setIsDirty(false);
  }

  function createListing() {
    const listingDto = CreateListingDto.from({
      owner: account()!.resources.user()!.id,
    });
    _setActiveListing(listingDto);
    setUserMessage(null);
    setIsDirty(false);
  }

  function editListing(listing: Listing) {
    const listingDto = UpdateListingDto.from(listing!.data);
    _setActiveListing(listingDto);
    setUserMessage(null);
    setIsDirty(false);
  }

  function handleDelete(listing: UpdateListingDto) {
    listings()?.deleteListing(listing);
    setUserMessage(null);
  }

  function handleSubmit(listingDto: CreateListingDto | UpdateListingDto) {
    if (listingDto instanceof CreateListingDto) {
      listings()!.createListing(listingDto);
    } else if (listingDto instanceof UpdateListingDto) {
      listings()!.updateListing(listingDto);
    }
  }

  return (
    <section>
      <h2>
        Mine oppføringer ({myListings()?.length || 0} / {MAX_LISTINGS})
      </h2>

      <div class={css.listings}>
        <For each={myListings()}>
          {(listing, idx) => (
            <sl-button
              prop:variant={
                listing.id === (activeListing() as UpdateListingDto)?.id
                  ? 'primary'
                  : 'default'
              }
              prop:name="pencil"
              prop:disabled={isDirty()}
              on:click={() => editListing(listing)}
            >
              <sl-icon slot="prefix" prop:name="pencil"></sl-icon>
              {listing.title}
            </sl-button>
          )}
        </For>

        <sl-button
          prop:variant={
            activeListing() instanceof CreateListingDto ? 'primary' : 'default'
          }
          prop:name="pencil"
          prop:disabled={isDirty()}
          on:click={() => createListing()}
        >
          <sl-icon slot="prefix" prop:name="plus-circle"></sl-icon>
          Ny
        </sl-button>
      </div>

      <sl-alert
        class={css.userMessage}
        prop:variant="success"
        prop:open={!!userMessage()}
      >
        <sl-icon slot="icon" prop:name="check2-circle"></sl-icon>
        <strong>
          Listing {userMessage()?.title} was {userMessage()?.action}
        </strong>
      </sl-alert>

      <Show when={activeListing()}>
        <Suspense fallback={<Loading>Form</Loading>}>
          <ListingForm
            listingDto={activeListing()!}
            setIsDirty={setIsDirty}
            onSubmit={handleSubmit}
            onCancel={clearActiveListing}
            onDelete={handleDelete}
          />
        </Suspense>
      </Show>
    </section>
  );
};
