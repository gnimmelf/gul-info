import { Component, createSignal, Show } from "solid-js";

import { loadFontFace, styler } from "~/lib/styler";

import { ServiceProvider } from "./ServiceProvider";
import { Layout } from "./Layout";

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
            "--breakpoint-sm": theme.breakPointSmall,
        }),
        "a, a:hover, a:visited": ({ theme }) => ({
            textDecoration: "none",
            color: theme.colorOnPrimary,
        }),
    });

const App: Component<{
    title: string
    namespace: string
    database: string
    datapoint: string
}> = (props) => {
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

            <ServiceProvider
                namespace={props.namespace}
                database={props.database}
                datapoint={props.datapoint}
            >
                <Layout title={props.title} />
            </ServiceProvider>
        </>
    );
};

export default App;
