/**
 * TODO! Pri#1 Make work reactively
 */
import { Component, createEffect, createMemo, Suspense } from 'solid-js';

import { styler } from '~/ui/lib/styler';

import { Filters, FiltersSchemaType } from '~/features/directory/Filters';
import { useService } from '~/ui/providers/ServiceProvider';

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

  const listings = createMemo(() => directory()?.state().listings);

  createEffect(() => console.log(directory.state))

  return (
    <section>
      <ListingsFilters>
        <div>{listings()?.length} treff.</div>
      </ListingsFilters>

      <Suspense fallback={<Loading />}>
        {listings()?.map(({ title, description, links, tags, ...contact }) => (
          <sl-card class={css.card}>
            <div slot="header" class={css.cardHeader}>
              <div class="title">{title}</div>
              <div class="flex-middle">
                <IconLabel label="beskrivelse" icon="info-circle">
                  {description}
                </IconLabel>
              </div>
              <div>
                <Phone phoneNumber={contact.phone} />
              </div>
            </div>
            <div>
              <div class={css.cardBody}>
                <div>
                  <Address {...contact} />
                </div>
                <div>
                  {links.map((link) => (
                    <span>
                      <WebLink link={link} />
                      <br />
                    </span>
                  ))}
                </div>
              </div>
              <div>
                {tags.map((tag) => (
                  <sl-tag
                    style={{ cursor: 'pointer' }}
                    prop:variant="primary"
                    prop:size="small"
                    on:click={() =>
                      directory()?.setFilters({ tagKeys: [tag.key] }, true)
                    }
                  >
                    {tag.name}
                  </sl-tag>
                ))}
              </div>
            </div>
          </sl-card>
        ))}
      </Suspense>
    </section>
  );
};
