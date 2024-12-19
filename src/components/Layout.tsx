import { Component } from "solid-js";

import { join, styler } from "~/lib/styler";

import { PageListings } from "./PageListings";

const css = styler.css({
    app: ({ theme }) => ({
        padding: "10px 15px",
        color: theme.colorOnPrimary,
        backgroundColor: theme.colorPrimary,
        font: "16px var(--sl-font-sans)",
        fontWeight: "var(--sl-font-weight-normal)",
    }),
    border: ({ theme }) => ({
        borderRadius: "10px",
        border: "5px solid",
        borderColor: theme.colorAccent,
    }),
    title: ({ theme }) => ({
        fontFamily: "'Playwrite HU', sans-serif",
        fontSize: theme.fontSizeLg,
    }),
});

export const Layout: Component<{
    title: string;
}> = (props) => {
    return (
        <div class={join(css.app, css.border)}>
            <h1 class={join(css.title)}>{props.title}</h1>
            <PageListings />
        </div>
    );
};
