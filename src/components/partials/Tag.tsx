import { Component, createSignal } from "solid-js";

import { join, styler } from "~/lib/styler";

const css = styler.css({
    wrapper: {
        paddingRight: '2px',
    }
})

export const Tag: Component<{
    key: string;
    name: string;
}> = (props) => {
    return (
        <span data-key={props.key} class={css.wrapper}>
            <sl-tag prop:variant="primary" prop:size="small" prop:pill={false}>
                {props.name}
            </sl-tag>
        </span>
    );
};
