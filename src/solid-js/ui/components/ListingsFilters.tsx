import { Component, JSXElement } from 'solid-js';

import { BadgeButton } from './BadgeButton';
import { TagsMatchType } from '~/shared/models/Filters';
import { useService } from '../providers/ServiceProvider';
import { addCss, Theme } from '~/shared/ui/theme';

const css = addCss({
  section: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.gapMd,
  }),
  filter: (theme: Theme) => ({
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'scroll',
  }),
});

export const ListingsFilters: Component<{
  children?: JSXElement;
}> = (props) => {
  const { directory, listings } = useService();

  const filters = () => directory()?.filters;
  const tags = () => directory()?.resources!.tags();
  const indexLetters = () => directory()?.resources.indexLetters();
  const isLoading = () => listings()?.resources.filteredListings.loading;

  const isTagMatchTypeAll = () =>
    filters()?.data.tagsMatchType === TagsMatchType.ALL;

  const toggleTagMatchType = () => {
    const next = isTagMatchTypeAll() ? TagsMatchType.ANY : TagsMatchType.ALL;
    filters()?.setTagsMatchType(next);
  };

  return (
    <section class={css.section}>
      <div class={css.filter}>
        {indexLetters()?.map(({ letter, count }) => (
          <BadgeButton
            buttonLabel={letter}
            badgeLabel={count}
            isActive={Boolean(filters()?.isActiveIndexLetter(letter))}
            disabled={isLoading()}
            onClick={() => filters()?.setIndexLetter(letter)}
          />
        ))}
      </div>

      <div>
        <sl-checkbox
          prop:size="small"
          prop:checked={isTagMatchTypeAll()}
          prop:disabled={isLoading()}
          on:input={() => toggleTagMatchType()}
        >
          Må match alle valgte tagger
        </sl-checkbox>
      </div>
      <div class={css.filter}>
        {tags()?.map((tag) => (
          <BadgeButton
            size="small"
            isActive={Boolean(filters()?.hasTag(tag.key))}
            buttonLabel={tag.name}
            badgeLabel={tag.usageCount}
            disabled={isLoading()}
            onClick={() => filters()?.setTag(tag.key, true)}
          />
        ))}
      </div>
      {props.children}
    </section>
  );
};
