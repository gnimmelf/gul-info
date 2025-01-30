import { Setter, Component, createEffect, For, Show } from 'solid-js';

import { deepCopy, toDotPath } from '~/shared/lib/utils';

import { CRUD_MODES } from '~/solid-js/lib/enums';
import { FormState } from '~/shared/ui/FormState';

import { CreateListingDtoSchema } from '~/shared/models/listing/CreateListingDto';
import { Listing, ListingSchemaType } from '~/shared/models/listing/Listing';

import { join, addCss, Theme } from '~/shared/ui/theme';
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

  // Get the values, only known way to keep type definitions
  const [values, setValue] = formState.getStore();

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
    setValue(toDotPath('links', linkIdx, 'href'), value);
  };

  const addLink = () => {
    setValue(toDotPath('links', values.links.length), { href: '' });
  };

  const removeLink = (linkIdx: number) => {
    setValue('links', (links) => links.filter((_, i) => i !== linkIdx));
  };

  const handleSubmit = () => {
    formState.validateAll();
    if (!formState.errors) {
      const data = deepCopy(values);
      props.onSubmit(data);
    }
  };

  return (
    <>
      <sl-card>
        <form class={join(css.form, 'validity-styles')}>
          <FormField key="title" formState={formState}>
            {(key) => (
              <sl-input
                prop:label="Virksomhetens navn"
                /* Generic */
                classList={{
                  'user-error': formState.hasErrors(key),
                  'user-valid': formState.isValid(key),
                }}
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={values[key]}
                on:input={({ target }) =>
                  setValue(key, (target as HTMLInputElement).value)
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
                classList={{
                  'user-error': formState.hasErrors(key),
                  'user-valid': formState.isValid(key),
                }}
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={values[key]}
                on:input={({ target }) =>
                  setValue(key, (target as HTMLInputElement).value)
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
                classList={{
                  'user-error': formState.hasErrors(key),
                  'user-valid': formState.isValid(key),
                }}
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={values[key]}
                on:input={({ target }) =>
                  setValue(key, (target as HTMLInputElement).value)
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
                classList={{
                  'user-error': formState.hasErrors(key),
                  'user-valid': formState.isValid(key),
                }}
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={values[key]}
                on:input={({ target }) =>
                  setValue(key, (target as HTMLInputElement).value)
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
                classList={{
                  'user-error': formState.hasErrors(key),
                  'user-valid': formState.isValid(key),
                }}
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={values[key]}
                on:input={({ target }) =>
                  setValue(key, (target as HTMLInputElement).value)
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
                classList={{
                  'user-error': formState.hasErrors(key),
                  'user-valid': formState.isValid(key),
                }}
                prop:size={defaultFormElementSize}
                prop:name={key}
                prop:required={true}
                prop:value={values[key]}
                on:input={({ target }) =>
                  setValue(key, (target as HTMLInputElement).value)
                }
                on:blur={() => formState.validateField(key)}
              />
            )}
          </FormField>

          <fieldset>
            <legend>Knagger</legend>
          </fieldset>

          <fieldset>
            <legend class={formState.hasErrors('links') ? 'error' : ''}>
              Lenker
            </legend>
            <For each={values.links}>
              {(link, idx) => (
                <FormField
                  key={toDotPath('links', idx(), 'href')}
                  formState={formState}
                  hideError={true}
                >
                  {(key) => (
                    <div class={css.itemRow}>
                      <sl-input
                        prop:size={defaultFormElementSize}
                        classList={{
                          'user-error': formState.hasErrors(key),
                          'user-valid': formState.isValid(key),
                        }}
                        prop:label={`Lenke ${idx() + 1}`}
                        prop:name={key}
                        prop:type="url"
                        prop:required={true}
                        prop:value={link.href}
                        on:input={(e) =>
                          updateLink(
                            idx(),
                            (e.target as HTMLInputElement).value,
                          )
                        }
                        on:blur={() => formState.validateField(key)}
                      />
                      <sl-icon-button
                        color="red"
                        prop:name="trash"
                        on:click={() => removeLink(idx())}
                      />
                    </div>
                  )}
                </FormField>
              )}
            </For>

            <sl-button
              prop:size={defaultFormElementSize}
              prop:disabled={values.links?.length === MAX_LINKS}
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
