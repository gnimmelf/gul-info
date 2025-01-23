import { serialize } from '@shoelace-style/shoelace';

import type { JSX } from 'solid-js';
import { Component, createEffect, createMemo, createSignal, For } from 'solid-js';
import { createStore } from 'solid-js/store'
import { Listing } from '~/domains/ui/account/Listing';

import { join, addCss, Theme } from '~/solid-js/ui/theme';

interface Link {
  href: string;
}

const css = addCss({
  form: (theme: Theme) => ({
    display: 'flex',
    gap: theme.gapMd,
    alignItems: 'baseline',
    flexWrap: 'wrap',
    '> *': {
      minWidth: '225px',
      flex: '1 1 33.333%',
    },
    '> .break-flow': {
      flexBasis: '100%',
    },
  }),
  itemRow: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'end',
    marginBottom: theme.gapMd,
    '>:first-child': {
      flex: '1',
    },
    '>:last-child': {
      flexShrink: '0',
    },
  }),
  controls: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'center',
  }),
});

/**
 * Component
 */
export const ListingForm: Component<{
  model: Listing;
  mode: 'create' | 'update';
  onSubmit: (data: Listing) => void;
  onCancel: () => void;
}> = (props) => {
  const state = createMemo(() => props.model.state())

  const [links, setLinks] = createStore<Link[]>([]);

  createEffect(() => setLinks(state().links))

  const updateLink = (idx: number, value: string) => {
    setLinks(idx, "href", value); // Update only the specific property
  };

  const addLink = () => {
    setLinks([...links, { href: '' }]); // Add a new link with an empty href
  };

  const removeLink = (idx: number) => {
    setLinks(links.filter((_, i) => i !== idx)); // Remove the link at the specified index
  };

  const defaultSElementSize = 'small';

  const handleSubmit: JSX.EventHandlerUnion<HTMLFormElement, SubmitEvent> = (
    event,
  ) => {
    event.preventDefault();
    const data = serialize(event.currentTarget);
    data.links = links.filter(({ href }) => href.trim().length > 0);
    //@ts-expect-error
    props.onSubmit(data);
  };

  return (
    <>
    <sl-card>
      <form class={css.form} onSubmit={handleSubmit}>
        <sl-input
          prop:size={defaultSElementSize}
          prop:label="Virksomhetens navn"
          prop:name="title"
          prop:required={true}
          prop:value={state().title}
        />

        <sl-input
          class="break-flow"
          prop:size={defaultSElementSize}
          prop:label="Beskrivelse av tjeneste eller produkt"
          prop:name="description"
          prop:required={true}
          prop:value={state().description}
        />

        <sl-input
          prop:size={defaultSElementSize}
          prop:label="Gateadresse"
          prop:name="address"
          prop:required={true}
          prop:value={state().address}
        />

        <sl-input
          prop:size={defaultSElementSize}
          prop:label="Postnummer"
          prop:name="zip"
          prop:required={true}
          prop:value={state().zip}
          on:blur={() => {}}
        />

        <sl-input
          prop:size={defaultSElementSize}
          prop:label="Telefonnummer"
          prop:name="phone"
          prop:type="tel"
          prop:required={true}
          prop:value={state().phone}
        />

        <sl-input
          prop:size={defaultSElementSize}
          prop:label="Epostadresse"
          prop:name="email"
          prop:type="email"
          prop:required={true}
          prop:value={state().email}
        />

        <fieldset>
          <legend>Knagger</legend>
        </fieldset>

        <fieldset>
          <legend>Lenker</legend>
          <For each={links}>
            {(link, idx) => (
              <div class={css.itemRow}>
                <sl-input
                  prop:size={defaultSElementSize}
                  prop:label={`Lenke ${idx() + 1}`}
                  prop:name={`links[${idx()}].href`}
                  prop:type="url"
                  prop:required={true}
                  prop:value={link.href}
                  on:input={(e) => updateLink(idx(), (e.target as HTMLInputElement).value)}
                />
                <sl-icon-button
                  color="red"
                  prop:name="trash"
                  on:click={() => removeLink(idx())}
                />
              </div>
            )}
          </For>
          <sl-button
            prop:size={defaultSElementSize}
            prop:type="button"
            prop:variant="primary"
            on:click={addLink}
          >
            Legg til ny
          </sl-button>
        </fieldset>

        <div class={join(css.controls, 'break-flow')}>
          <sl-button-group>
            <sl-button
              prop:size="medium"
              prop:type="submit"
              prop:variant="primary"
            >
              Lagre
            </sl-button>
            <sl-button
              prop:size="medium"
              prop:type="button"
              prop:variant="neutral"
              on:click={props.onCancel}
            >
              Avbryt
            </sl-button>
          </sl-button-group>
        </div>
      </form>
    </sl-card>
    </>
  );
};

export default ListingForm;
