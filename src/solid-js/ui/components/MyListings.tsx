import { Component, createSignal, For, Show, Suspense } from 'solid-js';

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
});

export const MyListings: Component<{}> = (props) => {
  const { listings } = useService();

  const [isDirty, setIsDirty] = createSignal(false);
  const [activeListing, _setActiveListing] =
    createSignal<CreateListingDto | UpdateListingDto | null>(null);

  const myListings = () => listings()?.resources.myListings();
  const saving = () => listings()?.resources.saveListing();

  function clearActiveListing() {
    _setActiveListing(null);
    setIsDirty(false);
  }

  function setActiveListing(listing: Listing | null) {
    let listingDto = null;
    if (listing === null) {
      listingDto = CreateListingDto.from({});
    } else {
      listingDto = UpdateListingDto.from(listing!.data);
    }
    _setActiveListing(listingDto);
    setIsDirty(false);
  }

  function handleSubmit(listingDto: CreateListingDto | UpdateListingDto) {
    listings()!.saveListing(listingDto);
    setIsDirty(false);
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
              prop:name="pencil"
              prop:disabled={isDirty()}
              on:click={() => setActiveListing(listing)}
            >
              <sl-icon slot="prefix" prop:name="pencil"></sl-icon>
              {listing.title}
            </sl-button>
          )}
        </For>

        <sl-button
          prop:name="pencil"
          prop:disabled={isDirty()}
          on:click={() => setActiveListing(null)}
        >
          <sl-icon slot="prefix" prop:name="plus-circle"></sl-icon>
          Ny
        </sl-button>
      </div>

      <Show when={activeListing()}>
        <Suspense fallback={<Loading>Form</Loading>}>
          <ListingForm
            listingDto={activeListing()!}
            setIsDirty={setIsDirty}
            onSubmit={handleSubmit}
            onCancel={() => clearActiveListing()}
          />

          <sl-alert prop:variant="success" prop:open={Boolean(saving())}>
            <sl-icon slot="icon" prop:name="check2-circle"></sl-icon>
            <strong>Your changes have been saved</strong>
          </sl-alert>
        </Suspense>
      </Show>
    </section>
  );
};
