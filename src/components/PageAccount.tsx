import { Component } from "solid-js";

import { join, styler } from "~/lib/styler";

import listingsStore from "~/lib/mock-store";

const css = styler.css({

});

export const PageAccount: Component<{
    title?: string;
}> = (props) => {
    const [products] = listingsStore;
    return (
        <section>
            <h2>PageAccount</h2>
        </section>
    );
};
