import { Component, createEffect, createMemo, JSXElement } from 'solid-js';

import { styler } from '~/shared/lib/styler';

import { BadgeButton } from './BadgeButton';
import { Filters, TFilterState } from '~/domains/directory/Filters';
import { useService } from '../providers/ServiceProvider';

const css = styler.css({
  section: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spaceY,
  }),
  filter: ({ theme }) => ({
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'scroll',
  }),
});

export const ListingsFilters: Component<{
  children?: JSXElement;
}> = (props) => {
  const { directory } = useService();

  const filters = () => directory()?.filters();
  const tags = () => directory()?.resources.tags();
  const indexLetters = () => directory()?.resources.indexLetters();
  const isLoading = () => directory()?.resources.listings.loading;

  createEffect(() => console.log(filters()));

  return (
    <section class={css.section}>
      <div>Filter {filters()?.state().indexLetter}</div>
      <div class={css.filter}>
        {indexLetters()?.map(({ letter, count }) => (
          <BadgeButton
            buttonLabel={letter}
            badgeLabel={count}
            isActive={!!filters()?.isActiveIndexLetter(letter)}
            disabled={isLoading()}
            onClick={() => filters()?.setIndexLetter(letter)}
          />
        ))}
      </div>

      <div class={css.filter}>
        {tags()?.map((tag) => (
          <BadgeButton
            size="small"
            isActive={!!filters()?.hasTag(tag.key)}
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
