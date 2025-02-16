import { Component, For, createSignal } from 'solid-js';

import { join, addCss, Theme } from '~/shared/ui/theme';
import { TagViewModel } from '~/shared/models/TagViewModel';
import { MAX_TAGS } from '~/shared/constants';
import { FormState } from '~/solid-js/lib/FormState';
import { FormStateType } from './ListingForm';

const css = addCss({
  tagsContainer: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: theme.gapMd,
    marginBottom: theme.gapMd,
  }),
});

/**
 * Component
 */
export const ListingFormTags: Component<{
  tags?: TagViewModel[];
  selectedTagIds?: string[];
  addTag: (tagId: string) => void;
  removeTag: (tagId: string) => void;
  formState: FormState<FormStateType>;
}> = (props) => {
  const defaultFormElementSize = 'small';

  return (
    <fieldset>
      <legend>
        Knagger ({props.selectedTagIds?.length} av {MAX_TAGS})
      </legend>
      <div class={css.tagsContainer}>
        <For each={props.selectedTagIds}>
          {(tagId) => {
            const tag = props.tags?.find((tag) => tag.id === tagId)!;
            return (
              <sl-button-group>
                <sl-button
                  prop:size="small"
                  prop:variant="primary"
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

      <div>
        <sl-select
          prop:size={defaultFormElementSize}
          prop:placeholder="Velg knagg"
          classList={{
            'user-error': props.formState.hasErrors('tags'),
            'user-valid': props.formState.isValid('tags'),
          }}
          prop:disabled={props.selectedTagIds?.length === MAX_TAGS}
        >
          <For each={props.tags}>
            {(tag) => (
              <sl-option prop:value={tag.id} on:click={() => props.addTag(tag.id)}>
                {tag.name}
              </sl-option>
            )}
          </For>
        </sl-select>
      </div>
    </fieldset>
  );
};

export default ListingFormTags;
