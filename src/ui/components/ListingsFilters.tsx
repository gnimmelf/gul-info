import { Component, createMemo, JSXElement } from 'solid-js';

import { styler } from '~/ui/lib/styler';

import { BadgeButton } from './BadgeButton';
import { Filters, FiltersSchemaType } from '~/features/directory/Filters';
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

  const filters = createMemo(() => directory()?.state().filters);
  const tags = createMemo(() => directory()?.state().tags);
  const indexLetters = createMemo(() => directory()?.state().indexLetters);

  return (
    <section class={css.section}>
      <div>Filter {filters()?.indexLetter}</div>
      <div class={css.filter}>
        {indexLetters()?.map(({ letter, count }) => (
            <BadgeButton
              buttonLabel={letter}
              badgeLabel={count}
              isActive={!!(filters()?.indexLetter === letter)}
              disabled={directory.loading}
              onClick={() =>
                filters()?.setIndexLetter(letter)
              }
            />
          ))}
      </div>

      <div class={css.filter}>
        {tags()?.map((tag) => (
            <BadgeButton
              size="small"
              isActive={!!(filters()?.tagKeys.includes(tag.key))}
              buttonLabel={tag.name}
              badgeLabel={tag.usageCount}
              disabled={directory.loading}
              onClick={() => filters()?.setTag(tag.key, true)}
            />
          ))}
      </div>
      {props.children}
    </section>
  );
};
