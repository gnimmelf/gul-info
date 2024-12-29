import { Component, Setter } from "solid-js";

import { styler } from "~/lib/styler";

import { FilterState } from "~/services/DirectoryService";

const css = styler.css({
    letters: ({theme}) => ({
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        marginBottom: theme.spaceY
    })
})

export const ListingsFilters: Component<{
    loading: boolean;
    filterState: FilterState
    onFilterChange: (filters: FilterState) => void;
}> = (props) => {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ".split("");

    return (
        <section>

        <div class={css.letters}>
            {letters.map(letter => (
                <sl-button
                prop:disabled={props.loading}
                onClick={() => props.onFilterChange({ letter })}
                >{letter}</sl-button>
            ))}
        </div>

        {JSON.stringify(props.filterState)}
        </section>
    );
};
