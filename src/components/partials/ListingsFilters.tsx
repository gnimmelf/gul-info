import { Component, Match, Setter, Show, Switch } from "solid-js";

import { styler } from "~/lib/styler";

import { FilterState } from "~/services/DirectoryService";
import { useService } from "../ServiceProvider";
import { BadgeButton } from "./BadgeButton";

const css = styler.css({
    section: ({ theme }) => ({
        "> *": {
            marginBottom: theme.spaceY,
        },
    }),
    letters: ({ theme }) => ({
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
    }),
});

export const ListingsFilters: Component<{
    loading: boolean;
    filterState: FilterState;
    onFilterChange: (filters: FilterState) => void;
}> = (props) => {
    const { directory } = useService();
    // TODO! Drop this, just use `letterCount`
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ".split("");

    const getLetterCount = (letter: string) =>
        directory.listingLetters()
            ?.find((x) => x.letter === letter)
            ?.count;

    return (
        <section class={css.section}>
            <div class={css.letters}>
                {letters.map((letter) => (
                    <Show when={getLetterCount(letter)}>
                        <BadgeButton
                            buttonLabel={letter}
                            badgeLabel={getLetterCount(letter)}
                            isActive={props.filterState.letter === letter}
                            disabled={props.loading ||
                                !getLetterCount(letter)}
                            onClick={() =>
                                props.onFilterChange({
                                    // Unselect letter if already selected
                                    letter: props.filterState.letter === letter
                                        ? ""
                                        : letter,
                                })}
                        />
                    </Show>
                ))}
            </div>

            <div>
                Filters: {JSON.stringify(props.filterState)}
                <br />
                Letters: {JSON.stringify(directory.listingLetters())}
            </div>
        </section>
    );
};
