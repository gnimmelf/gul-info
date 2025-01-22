import { serialize } from '@shoelace-style/shoelace';
import { Component, createSignal, For } from 'solid-js';
import type { JSX } from 'solid-js';

import { addCss, Theme } from '~/solid-js/ui/theme';

interface Link {
  href: string;
}

interface FormData {
  title: string;
  description: string;
  address: string;
  zip: string;
  municipality: string;
  phone: string;
  email: string;
  links: Link[];
}

interface ListingFormProps<T> {
  model: T;
  mode: 'create' | 'read' | 'update';
  onSubmit: (data: Partial<T>) => void;
  onCancel?: () => void;
}

const css = addCss({
  form: (theme: Theme) => ({
    display: 'flex',
    flexGap: theme.spaceY,
  }),
});

/**
 * Component
 */
export const ListingForm: Component<ListingFormProps<any>> = (props) => {
  const [links, setLinks] = createSignal<Link[]>([{ href: '' }]);

  const addLink = () => {
    setLinks((prev) => [...prev, { href: '' }]);
  };

  const removeLink = (idx: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateLink = (idx: number, value: string) => {
    setLinks((prev) =>
      prev.map((link, i) => (i === idx ? { href: value } : link)),
    );
  };

  const handleSubmit: JSX.EventHandlerUnion<HTMLFormElement, SubmitEvent> = (
    event,
  ) => {
    event.preventDefault();
    const data = serialize(event.currentTarget);
    data.links = links();
    props.onSubmit(data);
  };

  return (
    <form class={css.form} onSubmit={handleSubmit}>
      <sl-input
        prop:label="Foretakets navn"
        prop:name="title"
        prop:required={true}
      />

      <sl-input
        prop:label="Beskrivelse av tjeneste eller produkt"
        prop:name="description"
        prop:required={true}
      />

      <sl-input
        prop:label="Gateadresse"
        prop:name="address"
        prop:required={true}
      />

      <sl-input
        prop:label="Postnummer"
        prop:name="zip"
        prop:pattern="^\d{4}$"
        prop:required={true}
      />

      <sl-input
        prop:label="Telefonnummer"
        prop:name="phone"
        prop:type="tel"
        prop:required={true}
      />

      <sl-input
        prop:label="Epostadresse"
        prop:name="email"
        prop:type="email"
        prop:required={true}
      />

      <fieldset>
        <legend>Lenker</legend>
        <For each={links()}>
          {(link, idx) => (
            <div>
              <sl-input
                prop:label={`Lenke ${idx() + 1}`}
                prop:name={`links[${idx()}].href`}
                prop:type="url"
                prop:required={true}
                prop:value={link.href}
                on:input={(e) =>
                  updateLink(idx(), (e.target as HTMLInputElement).value)
                }
              />
              <sl-button
                prop:type="button"
                prop:variant="danger"
                on:click={() => removeLink(idx())}
              >
                Fjern
              </sl-button>
            </div>
          )}
        </For>
        <sl-button prop:type="button" prop:variant="primary" on:click={addLink}>
          Legg til ny
        </sl-button>
      </fieldset>

      <div>
        <sl-button prop:size="medium" prop:type="submit" prop:variant="primary">
          Lagre
        </sl-button>
        {props.onCancel && (
          <sl-button
            prop:size="medium"
            prop:type="button"
            prop:variant="neutral"
            on:click={props.onCancel}
          >
            Avbryt
          </sl-button>
        )}
      </div>
    </form>
  );
};

export default ListingForm;
