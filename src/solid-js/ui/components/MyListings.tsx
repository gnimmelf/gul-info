import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  For,
  Show,
} from 'solid-js';

import { useService } from '~/solid-js/ui/providers/ServiceProvider';
import { ListingForm } from '../components/ListingForm';
import { addCss, Theme } from '~/solid-js/ui/theme';
import { Listing, ListingSchemaType } from '~/shared/models/listing/Listing';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { CRUD_MODES } from '~/solid-js/lib/enums';

const css = addCss({
  listings: (theme: Theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.gapMd,
    marginBottom: theme.gapMd,
  }),
});

export const MyListings: Component<{}> = (props) => {
  const { account } = useService();

  const [isDirty, setIsDirty] = createSignal(false);
  const [activeListing, _setActiveListing] = createSignal<{
    mode: CRUD_MODES;
    listing: Listing;
  } | null>(null);

  const listings = createMemo(() => account()?.resources.listings());

  const createNewListing = () => {
    const dto = CreateListingDto.from({
      owner: account()?.resources.user()!.id,
    });
    const listing = new Listing(dto.data);
    return listing;
  };

  const setActiveListing = (listing: Listing | null, mode?: CRUD_MODES) => {
    _setActiveListing(listing ? { listing, mode: mode! } : null);
    setIsDirty(false);
    console.log('setActiveListing', listing?.state().title, listing);
  };

  const handleSubmit = (data: ListingSchemaType) => {
    console.log(data);
  };

  return (
    <section>
      <h2>Mine oppføringer</h2>
      <div class={css.listings}>
        <For each={listings()}>
          {(listing, idx) => (
            <sl-button
              prop:name="pencil"
              prop:disabled={isDirty()}
              on:click={() => setActiveListing(listing, CRUD_MODES.UPDATE)}
            >
              <sl-icon slot="prefix" prop:name="pencil"></sl-icon>
              {listing.state().title}
            </sl-button>
          )}
        </For>

        <sl-button
          prop:name="pencil"
          prop:disabled={isDirty()}
          on:click={() =>
            setActiveListing(createNewListing(), CRUD_MODES.CREATE)
          }
        >
          <sl-icon slot="prefix" prop:name="plus-circle"></sl-icon>
          Ny
        </sl-button>
      </div>

      <Show when={activeListing()}>
        <ListingForm
          model={activeListing()!.listing}
          mode={activeListing()!.mode}
          setIsDirty={setIsDirty}
          onSubmit={handleSubmit}
          onCancel={() => setActiveListing(null)}
        />
      </Show>
    </section>
  );
};
