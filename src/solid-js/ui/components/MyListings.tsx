import {
  batch,
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
import { Listing } from '~/domains/ui/account/Listing';
import { CreateListingDto } from '~/domains/ui/account/CreateListingDto';
import { stableStringify } from '~/shared/lib/utils';

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
  const [activeListing, _setActiveListing] = createSignal<Listing | null>(null);

  const listings = createMemo(() => account()?.resources.listings());

  const createNewListing = () => {
    const dto = CreateListingDto.from({
      owner: account()?.resources.user()!.id,
    });
    const listing = new Listing(dto.data);
    return listing;
  };

  const setActiveListing = (listing: Listing | null) => {
      _setActiveListing(listing)
      setIsDirty(false);
      console.log('setActiveListing', listing?.state().title, listing)
  }

  createEffect(() => console.log('listing', listings()))

  return (
    <section>
      <h2>Mine oppføringer</h2>
      <div class={css.listings}>
        <For each={listings()}>
          {(listing, idx) => (
            <sl-button
              prop:name="pencil"
              prop:disabled={isDirty()}
              on:click={() => setActiveListing(listing)}
            >
              <sl-icon slot="prefix" prop:name="pencil"></sl-icon>
              {listing.state().title}
            </sl-button>
          )}
        </For>

        <sl-button
          prop:name="pencil"
          prop:disabled={isDirty()}
          on:click={() => setActiveListing(createNewListing())}
        >
          <sl-icon slot="prefix" prop:name="plus-circle"></sl-icon>
          Ny
        </sl-button>
      </div>

      <Show when={activeListing()}>
        <ListingForm
          model={activeListing()!}
          setIsDirty={setIsDirty}
          onSubmit={(data) => console.log(data)}
          onCancel={() => setActiveListing(null)}
        />
      </Show>
    </section>
  );
};
