import { Component } from "solid-js";

import { join, styler } from "~/lib/styler";

import { WebLink } from "./parts/WebLink";
import { Tag } from "./parts/Tag";
import { Phone } from "./parts/Phone";
import { Address } from "./parts/Address";

import listingsStore from "~/lib/store-listings";

const css = styler.css({
    card: {
        "--border-radius": "15px",
        width: "100%",
        marginBottom: "1rem",
        "& .flex-middle > *": {
            justifySelf: "center",
        },
    },
    cardHeader: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        position: "relative",
        alignItems: "center",
        rowGap: "1rem",
        "> * ": {
            flex: "1 1 33.33%",
            minWidth: "200px",
            textAlign: "center",
            "@media (min-width: 700px)": {
                "&:first-child": {
                    textAlign: "left",
                },
                "&:last-child": {
                    textAlign: "right",
                },
            },
        },
    },
    cardBody: {
        display: "flex",
        justifyContent: "space-between",
    },
});

export const PageListings: Component<{
    title?: string;
}> = (props) => {
    const [listings] = listingsStore;
    return (
        <section>
            {listings.map((
                { title, description, links, tags, ...contact },
            ) => (
                <sl-card class={css.card}>
                    <div slot="header" class={css.cardHeader}>
                        
                            <div class={css.title}>{title}</div>
                            <div>
                                {tags.map((tag) => <Tag {...tag} />)}
                            </div>
                            <div>
                                <Phone phoneNumber={contact.phone} />
                            </div>
                        
                    </div>
                    <div>
                        <div slot="header" class={css.cardBody}>
                            <div>
                                <Address {...contact} />
                            </div>
                            <div>
                                {links.map((link) => (
                                    <div>
                                        <WebLink link={link} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </sl-card>
            ))}
        </section>
    );
};
