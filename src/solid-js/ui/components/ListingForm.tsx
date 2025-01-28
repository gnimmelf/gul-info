import { Setter, Component, createEffect, For } from 'solid-js';

import { deepCopy } from '~/shared/lib/utils';

import { CRUD_MODES } from '~/solid-js/lib/enums';
import { FormState } from '~/solid-js/lib/FormState';

import { CreateListingDtoSchema } from '~/shared/models/listing/CreateListingDto';
import { Listing, ListingSchemaType } from '~/shared/models/listing/Listing';

import { join, addCss, Theme } from '~/solid-js/ui/theme';
import { UpdateListingDtoSchema } from '~/shared/models/listing/UpdateListingDto';
import { FormField } from './FormField';
import { MAX_LINKS } from '~/shared/constants';

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

const SCHEMAS = {
  [CRUD_MODES.CREATE]: CreateListingDtoSchema,
  [CRUD_MODES.UPDATE]: UpdateListingDtoSchema,
} as const;

/**
 * Component
 */
export const ListingForm: Component<{
  model: Listing;
  mode: CRUD_MODES;
  setIsDirty: Setter<boolean>;
  onSubmit: (data: ListingSchemaType) => void;
  onCancel: () => void;
}> = (props) => {
  const defaultFormElementSize = 'small';

  const formState = new FormState<ListingSchemaType>();
  // Get the store, only known way to keep type definitions
  const [store, setStore] = formState.getStore();

  createEffect(() => {
    // (Re)Initialize formState when model changes
    //@ts-expect-error
    formState.initialize(props.model.state(), SCHEMAS[props.mode]);
  });

  createEffect(() => {
    // Propagate isDirty
    props.setIsDirty(formState.isDirty());
  });

  const updateLink = (linkIdx: number, value: string) => {
    setStore('links', linkIdx, 'href', value);
  };

  const addLink = () => {
    setStore('links', store.links.length, { href: '' });
  };

  const removeLink = (linkIdx: number) => {
    setStore('links', (links) => links.filter((_, i) => i !== linkIdx));
  };

  const handleSubmit = () => {
    formState.validateAll();
    if (!formState.errors) {
      const data = deepCopy(store);
      props.onSubmit(data);
    }
  };

  return (
    <>
      <pre>{JSON.stringify(formState.errors)}</pre>
      <pre>{JSON.stringify(formState._state.touchedFields)}</pre>
      <sl-card>
        <form class={css.form}>
          <FormField key="title" formState={formState}>
            {(key) => (
              <sl-input
                prop:label="Virksomhetens navn"
                /* Generic */
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={store[key]}
                on:input={({ target }) =>
                  setStore(key, (target as HTMLInputElement).value)
                }
                on:blur={() => formState.validateField(key)}
              />
            )}
          </FormField>

          <FormField key="description" formState={formState}>
            {(key) => (
              <sl-input
                class="break-flow"
                prop:label="Beskrivelse av tjeneste eller produkt"
                /* Generic */
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={store[key]}
                on:input={({ target }) =>
                  setStore(key, (target as HTMLInputElement).value)
                }
                on:blur={() => formState.validateField(key)}
              />
            )}
          </FormField>

          <FormField key="address" formState={formState}>
            {(key) => (
              <sl-input
                prop:label="Gateadresse"
                /* Generic */
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={store[key]}
                on:input={({ target }) =>
                  setStore(key, (target as HTMLInputElement).value)
                }
                on:blur={() => formState.validateField(key)}
              />
            )}
          </FormField>

          <FormField key="zip" formState={formState}>
            {(key) => (
              <sl-input
                prop:label="Postnummer"
                /* Generic */
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={store[key]}
                on:input={({ target }) =>
                  setStore(key, (target as HTMLInputElement).value)
                }
                on:blur={() => formState.validateField(key)}
              />
            )}
          </FormField>

          <FormField key="phone" formState={formState}>
            {(key) => (
              <sl-input
                prop:label="Telefonnummer"
                /* Generic */
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={store[key]}
                on:input={({ target }) =>
                  setStore(key, (target as HTMLInputElement).value)
                }
                on:blur={() => formState.validateField(key)}
              />
            )}
          </FormField>

          <FormField key="email" formState={formState}>
            {(key) => (
              <sl-input
                prop:label="Epostadresse"
                /* Generic */
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={store[key]}
                on:input={({ target }) =>
                  setStore(key, (target as HTMLInputElement).value)
                }
                on:blur={() => formState.validateField(key)}
              />
            )}
          </FormField>

          <fieldset>
            <legend>Knagger</legend>
          </fieldset>

          <fieldset>
            <legend>Lenker</legend>
            <For each={store.links}>
              {(link, idx) => (
                <div class={css.itemRow}>
                  <sl-input
                    prop:size={defaultFormElementSize}
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
              prop:size={defaultFormElementSize}
              prop:disabled={store.links?.length === MAX_LINKS}
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
                prop:type="button"
                prop:variant="primary"
                on:click={handleSubmit}
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
