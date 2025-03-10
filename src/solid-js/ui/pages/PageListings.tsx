import { Component, createEffect, createSignal, For, Suspense } from 'solid-js';
import { trackStore } from '@solid-primitives/deep';

import { useService } from '~/solid-js/ui/providers/ServiceProvider';

import { WebLink } from '../components/WebLink';
import { Phone } from '../components/Phone';
import { Address } from '../components/Address';
import { IconLabel } from '../components/IconLabel';
import { Loading } from '../components/Loading';
import { ListingsFilters } from '../components/ListingsFilters';
import { addCss } from '~/shared/ui/theme';

const css = addCss({
  card: {
    '--border-radius': '15px',
    width: '100%',
    marginBottom: '1rem',
    '& .flex-middle > *': {
      justifySelf: 'center',
    },
  },
  cardHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
    alignItems: 'center',
    rowGap: '1rem',
    '> * ': {
      flex: '1 1 33.33%',
      minWidth: '200px',
      textAlign: 'center',
      '@media (min-width: 500px)': {
        '&:first-child': {
          textAlign: 'left',
        },
      },
      '@media (min-width: 700px)': {
        '&:last-child': {
          textAlign: 'right',
        },
      },
    },
    '& .title': {
      fontWeight: 'bolder',
    },
  },
  cardBody: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

/**
 * Component
 */
export const PageListings: Component = () => {
  const { directory } = useService();

  const [hitCount, setHitCount] = createSignal(0);

  const filters = () => directory()?.filters;
  const filteredListings = () => directory()?.resources.filteredListings();

  createEffect(() => setHitCount(filteredListings()?.length || 0));

  createEffect(() => {
    if (directory()) {
      trackStore(filters()!);
      directory()!.filterListings(filters()!.data);
    }
  });

  return (
    <section>
      <ListingsFilters>
        <div>{hitCount()} treff.</div>
      </ListingsFilters>

      <Suspense fallback={<Loading>Listings</Loading>}>
        <For each={filteredListings()}>
          {(listing) => (
            <sl-card class={css.card}>
              <div slot="header" class={css.cardHeader}>
                <div class="title">{listing.title}</div>
                <div class="flex-middle">
                  <IconLabel label="beskrivelse" icon="info-circle">
                    {listing.description}
                  </IconLabel>
                </div>
                <div>
                  <Phone phoneNumber={listing.phone} />
                </div>
              </div>
              <div>
                <div class={css.cardBody}>
                  <div>
                    <Address {...listing} />
                  </div>
                  <div>
                    {listing.links.map((link) => (
                      <span>
                        <WebLink link={link} />
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  {listing.tags.map((tag) => (
                    <sl-tag
                      style={{ cursor: 'pointer' }}
                      prop:variant="primary"
                      prop:size="small"
                      on:click={() => filters()?.setTag(tag.id)}
                    >
                      {tag.name}
                    </sl-tag>
                  ))}
                </div>
              </div>
            </sl-card>
          )}
        </For>
      </Suspense>
    </section>
  );
};
