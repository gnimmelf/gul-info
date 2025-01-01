import { Component, Match, Setter, Show, Switch } from "solid-js";

import { styler } from "~/lib/styler";

import { Filters } from "~/core/repository";

import { useService } from "../ServiceProvider";
import { BadgeButton } from "./BadgeButton";
import { SelectableTag } from "./SelectableTag";

const css = styler.css({
  section: ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spaceY,
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
              props.onFilterChange({ letter })}
          />
        ))}
      </div>

      <div class={css.filterValues}>
        {directory.tags()?.map(({ key, name }) => (
          <SelectableTag
            key={key}
            name={name}
            isActive={props.filterState.tag === key}
            disabled={props.loading}
            onClick={() => {
              props.onFilterChange({ tag: key });
            }}
          />
        ))}
      </div>
    </section>
  );
};
