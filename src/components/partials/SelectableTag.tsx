import { Component, createSignal, Setter } from "solid-js";

import { join, styler } from "~/lib/styler";

const css = styler.css({
    wrapper: {
        paddingRight: "2px",
    },
    tag: {
        cursor: "pointer",
    },
});

export const SelectableTag: Component<{
    key: string;
    name: string;
    isActive?: boolean;
    disabled: boolean;
    onClick: Setter<string>;
}> = (props) => {
    return (
        <span data-key={props.key} class={css.wrapper}>
            <sl-button
                prop:size="small"
                prop:variant={props.isActive ? "primary" : "default"}
                class={css.button}
                prop:disabled={props.disabled}
                on:click={() => props.onClick(props.key)}
            >
                {props.name}
            </sl-button>
        </span>
    );
};
