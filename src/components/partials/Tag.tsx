import { Component, createSignal, Setter } from "solid-js";

import { join, styler } from "~/lib/styler";

const css = styler.css({
    wrapper: {
        paddingRight: '2px',
    },
    tag: {
        cursor: "pointer"
    }
})

export const Tag: Component<{
    key: string;
    name: string;
    onTagClick: Setter<string>
}> = (props) => {
    return (
        <span data-key={props.key} class={css.wrapper}>
            <sl-tag class={css.tag} on:click={() => props.onTagClick(props.key)} prop:variant="primary" prop:size="small" prop:pill={false}>
                {props.name}
            </sl-tag>
        </span>
    );
};
