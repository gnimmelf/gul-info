import { Component, createSignal, JSXElement } from "solid-js";

import { join, styler } from "~/lib/styler";

const css = styler.css({
    wrapper: ({
        // display: "flex",

    }),
    label: {
        paddingInlineStart: 'var(--sl-spacing-2x-small)'
    }
});

export const IconLabel: Component<{
    icon: string;
    label: string;
    children: JSXElement;
}> = (props) => {
    return (
        <span class={css.wrapper}>
            <sl-icon
                prop:name={props.icon}
                prop:label={props.label}
            />
            <span class={css.label}>
                {props.children}
            </span>
        </span>
    );
};