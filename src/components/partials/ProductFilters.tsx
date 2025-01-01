import { Component, Match, Setter, Show, Switch } from "solid-js";

import { styler } from "~/lib/styler";

import { Filters } from "~/core/repository";

import { useService } from "../ServiceProvider";
import { BadgeButton } from "./BadgeButton";
import { Tag } from "./Tag";

const css = styler.css({
  section: ({ theme }) => ({
    "> *": {
      marginBottom: theme.spaceY,
    },
  }),
  filterValues: ({ theme }) => ({
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
  }),
});

export const ProductFilters: Component<{
  loading: boolean;
  filterState: Filters;
  onFilterChange: (filters: Filters) => void;
}> = (props) => {
  const { directory } = useService();

  return (
    <section class={css.section}>
      <div class={css.filterValues}>
        {directory.indexLetters()?.map(({ letter, count }) => (
          <BadgeButton
            buttonLabel={letter}
            badgeLabel={count}
            isActive={props.filterState.letter === letter}
            disabled={props.loading}
            onClick={() =>
              props.onFilterChange({
                // Unselect letter if already selected
                letter: props.filterState.letter === letter ? "" : letter,
              })}
          />
        ))}
      </div>

      <div class={css.filterValues}>
      {directory.tags()?.map((tag) => (
        <Tag {...tag} onTagClick={() => {
          props.onFilterChange({
            tag: tag.key
          })
        }}/>
      ))}
      </div>
    </section>
  );
};
