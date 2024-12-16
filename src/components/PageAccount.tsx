import { Component } from "solid-js";

import { join, styler } from "~/lib/styler";

import { WebLink } from "./parts/WebLink";
import { Tag } from "./parts/Tag";
import { Phone } from "./parts/Phone";
import { Address } from "./parts/Address";

import listingsStore from "~/lib/store-listings";

const css = styler.css({
    
});

export const PageAccount: Component<{
    title?: string;
}> = (props) => {
    const [listings] = listingsStore;
    return (
        <section>
            <h2>PageAccount</h2>
        </section>
    );
};
