import type { Accessor, Setter } from 'solid-js';
import { Component, createEffect, createSignal, For, Show } from 'solid-js';
import {
  createStore,
  reconcile,
  SetStoreFunction,
  unwrap,
} from 'solid-js/store';
import { CreateListingDtoSchema } from '~/shared/models/listing/CreateListingDto';
import { Listing, ListingSchemaType } from '~/shared/models/listing/Listing';
import { stableStringify, deepCopy, deepEqual } from '~/shared/lib/utils';
import { CRUD_MODES } from '~/solid-js/lib/enums';

import { join, addCss, Theme } from '~/solid-js/ui/theme';
import { UpdateListingDtoSchema } from '~/shared/models/listing/UpdateListingDto';
import { validateSchema, ValidateErrors } from '~/shared/lib/schema-helpers';
import { ZodAny } from 'zod';

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

class FormState<T extends object> {
  private initialShape!: Object;

  public store: T;
  private _setStore: SetStoreFunction<T>;

  public errors: Accessor<ValidateErrors>;
  public setErrors: Setter<ValidateErrors>;

  public isDirty: Accessor<boolean>;
  public setIsDirty: Setter<boolean>;

  public submitted = false;
  public touchedFields = new Set<string>([]);

  constructor() {
    //@ts-expect-error - setting initial value to `props.model.state()` messes with reactivity
    [this.store, this._setStore] = createStore<ListingSchemaType>({});
    [this.errors, this.setErrors] = createSignal<ValidateErrors>(null);
    [this.isDirty, this.setIsDirty] = createSignal<boolean>(false);
  }

  initialize(initialShape: T) {
    this.initialShape = deepCopy(initialShape);
    this._setStore(reconcile(deepCopy(initialShape)));
    this.setIsDirty(false);
  }

  toggleIsTouched(key: string, value: any) {
    //@ts-expect-error
    const isTouched = !deepEqual(this.initialShape[key], this.store[value]);
    if (isTouched) {
      this.touchedFields.add(key);
    } else {
      this.touchedFields.delete(key);
    }
  }

  setStore(
    ...args: [key: keyof T | any[], valueOrUpdater: any]
  ): void {
    const prevState = { ...this.store };
    this._setStore(...args);

    // Compare new state with old state
    for (const key in this.store) {
      if (this.store[key] !== prevState[key]) {
        this.toggleIsTouched(key, this.store[key]);
      }
    }
    this.setIsDirty(this.touchedFields.size > 0);
  }

  validate() {}
}

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

  createEffect(() => {
    // (Re)Initialize formState when model changes
    const values = deepCopy(props.model.state());
    formState.initialize(values);
  });

  createEffect(() => {
    // Propagate isDirty
    props.setIsDirty(formState.isDirty())
  })

  const updateLink = (linkIdx: number, value: string) => {
    formState.setStore('links', linkIdx, 'href', value);
  };

  const addLink = () => {
    formState.setStore('links', formState.store.links.length, { href: '' });
  };

  const removeLink = (linkIdx: number) => {
    formState.setStore('links', (links) =>
      links.filter((_, i) => i !== linkIdx),
    );
  };

  const validate = () => {
    const data = unwrap(formState.store);
    console.log({ data });
    if (props.mode === CRUD_MODES.CREATE) {
      validateSchema(CreateListingDtoSchema, data, formState.setErrors);
    } else if (props.mode === CRUD_MODES.UPDATE) {
      validateSchema(UpdateListingDtoSchema, data, formState.setErrors);
    }
  };

  const handleSubmit = () => {
    validate();
    if (!formState.errors()) {
      const data = deepCopy(formState.store);
      props.onSubmit(data);
    }
  };

  return (
    <>
      <pre>{JSON.stringify(formState.errors())}</pre>
      <sl-card>
        <form class={css.form}>
          <sl-input
            prop:size={defaultFormElementSize}
            prop:label="Virksomhetens navn"
            prop:name="title"
            prop:required={true}
            prop:value={formState.store.title}
            on:input={({ target }) =>
              formState.setStore('title', (target as HTMLInputElement).value)
            }
          />
          <Show when={formState.touchedFields.has('title')}>Error</Show>

          <sl-input
            class="break-flow"
            prop:size={defaultFormElementSize}
            prop:label="Beskrivelse av tjeneste eller produkt"
            prop:name="description"
            prop:required={true}
            prop:value={formState.store.description}
            on:input={({ target }) =>
              formState.setStore(
                'description',
                (target as HTMLInputElement).value,
              )
            }
          />

          <sl-input
            prop:size={defaultFormElementSize}
            prop:label="Gateadresse"
            prop:name="address"
            prop:required={true}
            prop:value={formState.store.address}
            on:input={({ target }) =>
              formState.setStore('address', (target as HTMLInputElement).value)
            }
          />

          <sl-input
            prop:size={defaultFormElementSize}
            prop:label="Postnummer"
            prop:name="zip"
            prop:required={true}
            prop:value={formState.store.zip}
            on:input={({ target }) =>
              formState.setStore('zip', (target as HTMLInputElement).value)
            }
          />

          <sl-input
            prop:size={defaultFormElementSize}
            prop:label="Telefonnummer"
            prop:name="phone"
            prop:type="tel"
            prop:required={true}
            prop:value={formState.store.phone}
            on:input={({ target }) =>
              formState.setStore('phone', (target as HTMLInputElement).value)
            }
          />

          <sl-input
            prop:size={defaultFormElementSize}
            prop:label="Epostadresse"
            prop:name="email"
            prop:type="email"
            prop:required={true}
            prop:value={formState.store.email}
            on:input={({ target }) =>
              formState.setStore('email', (target as HTMLInputElement).value)
            }
          />

          <fieldset>
            <legend>Knagger</legend>
          </fieldset>

          <fieldset>
            <legend>Lenker</legend>
            <For each={formState.store.links}>
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
