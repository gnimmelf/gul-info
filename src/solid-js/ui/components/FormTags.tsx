import { Component, For, createSignal } from 'solid-js';

import { join, addCss, Theme } from '~/shared/ui/theme';
import { TagViewModel } from '~/shared/models/TagViewModel';
import { MAX_TAGS } from '~/shared/constants';

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
export const FormTags: Component<{
  tags?: TagViewModel[];
  selectedTagIds?: string[];
  addTag: (tagId: string) => void;
  removeTag: (tagId: string) => void;
}> = (props) => {
  const defaultFormElementSize = 'small';

  const [selectedTag, setSelectedTag] = createSignal<string>('');

  return (
    <fieldset>
      <legend>
        Knagger ({props.selectedTagIds?.length} av {MAX_TAGS})
      </legend>
      <div class={css.itemRow}>
        <For each={props.selectedTagIds}>
          {(tagId) => {
            const tag = props.tags?.find((tag) => tag.id === tagId)!;
            return (
              <sl-button-group>
                <sl-button
                  prop:size="small"
                  on:click={() => props.removeTag(tagId)}
                >
                  <sl-icon slot="suffix" prop:name="trash"></sl-icon>
                  {tag.name}
                </sl-button>
              </sl-button-group>
            );
          }}
        </For>
      </div>

      <div class={css.itemRow}>
        <sl-select
          prop:size={defaultFormElementSize}
          prop:placeholder="Velg knagg"
          prop:disabled={props.selectedTagIds?.length === MAX_TAGS}
        >
          <For each={props.tags}>
            {(tag) => (
              <sl-option
                prop:value={tag.id}
                on:click={() => setSelectedTag(tag.id)}
              >
                {tag.name}
              </sl-option>
            )}
          </For>
        </sl-select>

        <sl-button
          prop:size={defaultFormElementSize}
          prop:disabled={props.selectedTagIds?.length === MAX_TAGS}
          prop:type="button"
          prop:variant="primary"
          on:click={() => {
            props.addTag(selectedTag());
          }}
        >
          Legg til
        </sl-button>
      </div>
    </fieldset>
  );
};

export default FormTags;
