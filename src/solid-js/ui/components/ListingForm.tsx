import { Setter, Component, createEffect, For } from 'solid-js';
import { unwrap } from 'solid-js/store';

import { toDotPath } from '~/shared/lib/utils';
import { MAX_LINKS, MAX_TAGS } from '~/shared/constants';

import {
  CreateListingDto,
  CreateListingDtoSchemaType,
} from '~/shared/models/listing/CreateListingDto';
import {
  UpdateListingDto,
  UpdateListingDtoSchemaType,
} from '~/shared/models/listing/UpdateListingDto';

import { FormState } from '~/solid-js/lib/FormState';

import { join, addCss, Theme } from '~/shared/ui/theme';
import { FormField } from './FormField';
import { useService } from '../providers/ServiceProvider';

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
  listingDto: CreateListingDto | UpdateListingDto;
  setIsDirty: Setter<boolean>;
  onSubmit: (listing: CreateListingDto | UpdateListingDto) => void;
  onCancel: () => void;
}> = (props) => {
  const { directory } = useService();

  const defaultFormElementSize = 'small';

  const formState = new FormState<
    CreateListingDtoSchemaType & UpdateListingDtoSchemaType
  >();

  // Get the values, only known way to keep type definitions
  const [values, setValue] = formState.getStore();

  createEffect(() => {
    // (Re)Initialize formState when model changes
    formState.initialize({
      initialValues: props.listingDto.data,
      schema: props.listingDto.schema,
    });
  });

  createEffect(() => {
    // Propagate isDirty
    props.setIsDirty(formState.isDirty());
  });

  const links = {
    update(idx: number, value: string) {
      setValue(toDotPath('links', idx, 'href'), value);
    },
    add() {
      setValue(toDotPath('links', values.links.length), { href: '' });
    },
    remove(idx: number) {
      setValue('links', (links) => links.filter((_, i) => i !== idx));
    },
  };

  const tags = {
    add(tagId: string) {
      setValue(toDotPath('tags', values.tags.length), tagId);
    },
    remove(tagId: string) {
      setValue('tags', (tags) => tags.filter((tag) => tag.id != tagId));
    },
  };

  function handleSubmit() {
    formState.validateAll();
    console.log('values', unwrap(values));
    if (formState.hasErrors()) {
      console.log('errors', unwrap(formState.errors));
      return;
    }

    if (props.listingDto instanceof CreateListingDto) {
      props.onSubmit(CreateListingDto.from({}));
    } else if (props.listingDto instanceof UpdateListingDto) {
      props.onSubmit(UpdateListingDto.from(values));
    }
  }

  return (
    <>
      <sl-card>
        <form class={join(css.form, 'validity-styles')}>
          <FormField key="isActive" formState={formState} class="break-flow">
            {(key) => (
              <sl-checkbox
                prop:size="small"
                prop:checked={values[key]}
                on:input={() => setValue(key, !values[key])}
              >
                Aktiv
              </sl-checkbox>
            )}
          </FormField>

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

          <FormField key="description" formState={formState} class="break-flow">
            {(key) => (
              <sl-input
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
          </FormField>find

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
            <legend>
              Knagger ({values.tags?.length} av {MAX_TAGS})
            </legend>
            <For each={values.tags}>
              {(tagId) => {
                const tag = directory()?.resources.tags()?.find(tag => tag.id === tagId)!;
                return (
                <div>
                  <sl-button-group>
                    <sl-button
                      prop:size="small"
                      on:click={() => tags.remove(tagId)}
                    >
                      <sl-icon slot="suffix" prop:name="trash"></sl-icon>
                      {tag.name}
                    </sl-button>
                  </sl-button-group>
                </div>
              )}}
            </For>

            <sl-button
              prop:size={defaultFormElementSize}
              prop:disabled={values.links?.length === MAX_LINKS}
              prop:type="button"
              prop:variant="primary"
              on:click={() => tags.add(selectedTag())}
            >
              Legg til
            </sl-button>
          </fieldset>

          <fieldset>
            <legend>
              Lenker ({values.links?.length} av {MAX_LINKS})
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
                          links.update(
                            idx(),
                            (e.target as HTMLInputElement).value,
                          )
                        }
                        on:blur={() => formState.validateField(key)}
                      />
                      <sl-icon-button
                        color="red"
                        prop:name="trash"
                        on:click={() => links.remove(idx())}
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
              on:click={links.add}
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
