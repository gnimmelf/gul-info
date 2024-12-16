import { Component, createSignal, Show } from "solid-js";

import { join, loadFontFace, styler } from "~/lib/styler";



import { PageListings } from './components/PageListings'
import { SlIcon } from "@shoelace-style/shoelace";
import { PageAccount } from "./components/PageAccount";


loadFontFace(
    "Playwrite HU",
    "url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')",
    {
        "font-optical-sizing": "auto",
        "font-weight": "400",
        "font-style": "normal",
    },
);

styler
    .setContext({
        prefix: "gifo",
        theme: {
            colorPrimary: "var(--gifo-color-primary)",
            colorOnPrimary: "var(--gifo-color-on-primary)",
            colorAccent: "var(--gifo-color-accent)",
            fontSizeLg: "2rem",
            fontSizeMd: "1.2rem",
            breakPointSm: "600px",
        },
    }).globals({
        ":root": ({ theme }) => ({
            '--breakpoint-sm': theme.breakPointSmall
        }),
        'a, a:hover, a:visited': ({ theme }) => ({
            textDecoration: 'none',
            color: theme.colorOnPrimary
        })
    });

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
    header: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    title: ({ theme }) => ({
        fontFamily: "'Playwrite HU', sans-serif",
        fontSize: theme.fontSizeLg,
    }),
});

const PAGES = {
    LISTINGS: "LISTINGS",
    ACCOUNT: "ACCOUNT"
} as const;

type PageType = typeof PAGES[keyof typeof PAGES];

const App: Component<{
    title: string;
}> = (props) => {

    const [activePage, setActivePage] = createSignal<PageType>(PAGES.LISTINGS)

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css"
            />
            <style id="styler">
                {styler.resolveGlobals()}
                {styler.resolveStyles()}
            </style>
            <div class={join(css.app, css.border)}>
                <section class={css.header}>
                    <h1 class={join(css.title, css.large)}>{props.title}</h1>
                    <Show when={activePage() === PAGES.LISTINGS}>
                        <sl-icon-button prop:name="gear" prop:label="Settings" on:click={() => setActivePage(PAGES.ACCOUNT)}></sl-icon-button>
                    </Show>
                    <Show when={activePage() === PAGES.ACCOUNT}>
                        <sl-icon-button prop:name="shop-window" prop:label="Settings" on:click={() => setActivePage(PAGES.LISTINGS)}></sl-icon-button>
                    </Show>
                </section>
                <Show when={activePage() === PAGES.LISTINGS}>
                    <PageListings />
                </Show>
                <Show when={activePage() === PAGES.ACCOUNT}>
                    <PageAccount />
                </Show>
            </div>
        </>
    );
};

export default App;
