import {
  Component,
  createEffect,
  createSignal,
  For,
  onMount,
  Suspense,
} from 'solid-js';

import { styler } from '~/shared/lib/styler';

import { useService } from '~/solid-js/ui/providers/ServiceProvider';

import { WebLink } from '../components/WebLink';
import { Phone } from '../components/Phone';
import { Address } from '../components/Address';
import { IconLabel } from '../components/IconLabel';
import { Loading } from '../components/Loading';
import { ListingsFilters } from '../components/ListingsFilters';

const css = styler.css({
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

export const PageListings: Component = () => {
  const { directory } = useService();

  const [hitCount, setHitCount] = createSignal(0);

  const filters = () => directory()?.filters();
  const listings = () => {
    const res = directory()?.resources.listings();
    setHitCount(res?.length || 0);
    return res;
  };

  return (
    <section>
      <ListingsFilters>
        <div>{hitCount()} treff.</div>
      </ListingsFilters>

      <Suspense fallback={<Loading>Listings</Loading>}>
        <For each={listings()}>
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
                      on:click={() => filters()?.setTag(tag.key)}
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
