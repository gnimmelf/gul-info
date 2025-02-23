import { Setter, Component, createEffect, createSignal, Show } from 'solid-js';
import { unwrap } from 'solid-js/store';

import {
  CreateListingDto,
} from '~/shared/models/listing/CreateListingDto';
import {
  UpdateListingDto,
} from '~/shared/models/listing/UpdateListingDto';

import { FormState } from '~/solid-js/lib/FormState';

import { join, addCss, Theme } from '~/shared/ui/theme';
import { FormField } from './FormField';
import { useService } from '../providers/ServiceProvider';
import ListingFormTags from './ListingFormTags';
import ListingFormLinks from './ListingFormLinks';

export type FormStateType = CreateListingDto.SchemaType & UpdateListingDto.SchemaType;

const css = addCss({
  form: (theme: Theme) => ({
    display: 'flex',
    gap: theme.gapMd,
    alignItems: 'stretch',
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
  onDelete: (listing: UpdateListingDto) => void;
}> = (props) => {
  const { listings } = useService();

  const defaultFormElementSize = 'small';

  const formState = new FormState<FormStateType>();

  // Get the value setter and getter
  const [values, setValue] = formState.getStore();

  createEffect(() => {
    // (Re)Initialize formState when model changes
    let dtoSchema;
    if (props.listingDto instanceof CreateListingDto) {
      dtoSchema = CreateListingDto.schema
    }
    else if (props.listingDto instanceof UpdateListingDto) {
      dtoSchema = UpdateListingDto.schema
    }

    formState.initialize({
      initialValues: props.listingDto.data,
      schema: dtoSchema!,
    });
  });

  createEffect(() => {
    // Propagate isDirty
    props.setIsDirty(formState.isDirty());
  });

  const links = {
    update(idx: number, value: string) {
      setValue('links', idx, 'href', value);
    },
    add() {
      setValue('links', values.links.length, { href: '' });
    },
    remove(idx: number) {
      setValue('links', (links) => links.filter((_, i) => i !== idx));
    },
  };

  const tags = {
    add(tagId: string) {
      if (values.tags.includes(tagId)) return;

      setValue('tags', values.tags.length, tagId);
    },
    remove(tagId: string) {
      setValue('tags', (tags) => tags.filter((tagId2) => tagId2 != tagId));
    },
    tags: () => listings()?.resources.tags(),
  };

  function handleSubmit() {
    formState.validateAll();
    if (formState.hasErrors()) {
      console.log('errors', unwrap(formState.errors));
      return;
    }

    if (props.listingDto instanceof CreateListingDto) {
      props.onSubmit(CreateListingDto.from(values));
    } else if (props.listingDto instanceof UpdateListingDto) {
      props.onSubmit(UpdateListingDto.from(values));
    }
  }

  return (
    <>
      <sl-card>
        <form class={join(css.form, 'validity-styles')}>
          <div class={join('break-flow', css.itemRow)}>
            <FormField key="isActive" formState={formState}>
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

            <Show when={props.listingDto instanceof UpdateListingDto}>
              <sl-button
                prop:size="medium"
                prop:type="button"
                prop:variant="danger"
                on:click={() => props.onDelete(props.listingDto as UpdateListingDto)}
              >
                <sl-icon slot="suffix" prop:name="trash"></sl-icon>
                Slett
              </sl-button>
            </Show>
          </div>

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

          <ListingFormTags
            tags={tags.tags()}
            addTag={tags.add}
            removeTag={tags.remove}
            selectedTagIds={values.tags}
            formState={formState}
          />

          <ListingFormLinks
            addLink={links.add}
            updateLink={links.update}
            removeLink={links.remove}
            links={values.links}
            formState={formState}
          />

          <div class={join(css.controls, 'break-flow')}>
            <sl-button-group>
              <sl-button
                prop:size="medium"
                prop:type="button"
                prop:variant="primary"
                prop:disabled={!formState.isDirty()}
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
