import { Component, For } from 'solid-js';

import { join, addCss, Theme } from '~/shared/ui/theme';
import { MAX_LINKS } from '~/shared/constants';
import { FormField } from './FormField';
import { toDotPath } from '~/shared/lib/utils';
import { FormState } from '~/solid-js/lib/FormState';
import { FormStateType } from './ListingForm';

const css = addCss({
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
});

/**
 * Component
 */
export const FormLinks: Component<{
  addLink: () => void;
  updateLink: (idx: number, value: string) => void;
  removeLink: (idx: number) => void;
  links: { href: string }[];
  formState: FormState<FormStateType>;
}> = (props) => {
  const defaultFormElementSize = 'small';

  return (
    <fieldset>
      <legend>
        Lenker ({props.links?.length} av {MAX_LINKS})
      </legend>
      <For each={props.links}>
        {(link, idx) => (
          <FormField
            key={toDotPath('links', idx(), 'href')}
            formState={props.formState}
            hideError={true}
          >
            {(key) => (
              <div class={css.itemRow}>
                <sl-input
                  prop:size={defaultFormElementSize}
                  classList={{
                    'user-error': props.formState.hasErrors(key),
                    'user-valid': props.formState.isValid(key),
                  }}
                  prop:label={`Lenke ${idx() + 1}`}
                  prop:name={key}
                  prop:type="url"
                  prop:required={true}
                  prop:value={link.href}
                  on:input={(e) =>
                    props.updateLink(
                      idx(),
                      (e.target as HTMLInputElement).value,
                    )
                  }
                  on:blur={() => props.formState.validateField(key)}
                />
                <sl-icon-button
                  color="red"
                  prop:name="trash"
                  on:click={() => props.removeLink(idx())}
                />
              </div>
            )}
          </FormField>
        )}
      </For>

      <sl-button
        prop:size={defaultFormElementSize}
        prop:disabled={props.links?.length === MAX_LINKS}
        prop:type="button"
        prop:variant="primary"
        on:click={props.addLink}
      >
        Legg til ny
      </sl-button>
    </fieldset>
  );
};

export default FormLinks;
