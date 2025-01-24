import { serialize } from '@shoelace-style/shoelace';

import type { JSX, Setter } from 'solid-js';
import { batch, Component, createEffect, createSignal, For } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import { Listing, ListingSchemaType } from '~/domains/ui/account/Listing';
import { stableStringify } from '~/shared/lib/utils';

import { join, addCss, Theme } from '~/solid-js/ui/theme';

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
  setIsDirty: Setter<boolean>;
  onSubmit: (data: Listing) => void;
  onCancel: () => void;
}> = (props) => {
  const [initialStateStr, setInitialStateStr] = createSignal<string>('');
  //@ts-expect-error - setting initial value to `props.model.state()` messes with reactivity
  const [store, setStore] = createStore<ListingSchemaType>({});

  // Update locals on new model
  createEffect(() => {
      const values = props.model.state();
      setInitialStateStr(stableStringify(values));
      setStore(reconcile(values));
  });

  // isDirty check
  createEffect(() => {
      const origStateStr = initialStateStr();
      const curStateStr = stableStringify(store);
      props.setIsDirty(curStateStr !== origStateStr);
  });

  const updateLink = (linkIdx: number, value: string) => {
    setStore('links', linkIdx, 'href', value); // Update the specific link's href
  };

  const addLink = () => {
    setStore('links', store.links.length, { href: '' }); // Add a new link
  };

  const removeLink = (linkIdx: number) => {
    setStore('links', (links) => links.filter((_, i) => i !== linkIdx)); // Remove the specified link
  };

  const defaultSElementSize = 'small';

  const handleSubmit: JSX.EventHandlerUnion<HTMLFormElement, SubmitEvent> = (
    event,
  ) => {
    event.preventDefault();
    const data = serialize(event.currentTarget);
    data.links = store.links.filter(({ href }) => href.trim().length > 0);
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
            prop:value={store.title}
            on:input={({ target }) =>
              setStore('title', (target as HTMLInputElement).value)
            }
          />

          <sl-input
            class="break-flow"
            prop:size={defaultSElementSize}
            prop:label="Beskrivelse av tjeneste eller produkt"
            prop:name="description"
            prop:required={true}
            prop:value={store.description}
            on:input={({ target }) =>
              setStore('description', (target as HTMLInputElement).value)
            }
          />

          <sl-input
            prop:size={defaultSElementSize}
            prop:label="Gateadresse"
            prop:name="address"
            prop:required={true}
            prop:value={store.address}
            on:input={({ target }) =>
              setStore('address', (target as HTMLInputElement).value)
            }
          />

          <sl-input
            prop:size={defaultSElementSize}
            prop:label="Postnummer"
            prop:name="zip"
            prop:required={true}
            prop:value={store.zip}
            on:input={({ target }) =>
              setStore('zip', (target as HTMLInputElement).value)
            }
          />

          <sl-input
            prop:size={defaultSElementSize}
            prop:label="Telefonnummer"
            prop:name="phone"
            prop:type="tel"
            prop:required={true}
            prop:value={store.phone}
            on:input={({ target }) =>
              setStore('phone', (target as HTMLInputElement).value)
            }
          />

          <sl-input
            prop:size={defaultSElementSize}
            prop:label="Epostadresse"
            prop:name="email"
            prop:type="email"
            prop:required={true}
            prop:value={store.email}
            on:input={({ target }) =>
              setStore('email', (target as HTMLInputElement).value)
            }
          />

          <fieldset>
            <legend>Knagger</legend>
          </fieldset>

          <fieldset>
            <legend>Lenker</legend>
            <For each={store.links}>
              {(link, idx) => (
                <div class={css.itemRow}>
                  <sl-input
                    prop:size={defaultSElementSize}
                    prop:label={`Lenke ${idx() + 1}`}
                    prop:name={`links[${idx()}].href`}
                    prop:type="url"
                    prop:required={true}
                    prop:value={link.href}
                    on:input={(e) =>
                      updateLink(idx(), (e.target as HTMLInputElement).value)
                    }
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
