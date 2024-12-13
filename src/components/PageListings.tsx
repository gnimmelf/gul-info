import { Component } from "solid-js";

import { join, styler } from "~/lib/styler";

import { WebLink } from "./parts/WebLink";
import { Tag } from "./parts/Tag";
import { Phone } from "./parts/Phone";
import { Address } from "./parts/Address";

import listingsStore from "~/lib/store-listings";
import { IconLabel } from "./parts/IconLabel";

const css = styler.css({
    title: ({ theme }) => ({
        fontSize: theme.fontSizeMd,
        fontWeight: "400",
    }),
    card: {
        "--border-radius": "15px",
        width: "100%",
        marginBottom: "1rem",
        "& .flex-middle": {
            margin: "0 auto",
        },
    },
    cardHeader: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        position: "relative",
        alignItems: "center",
        "> * ": {
            flex: "1 1 33.33%",
            minWidth: "200px",
            textAlign: "center",
            "@media (min-width: 600px)": {
                "&:first-child": {
                    textAlign: "left",
                    background: "red",
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
    title: string;
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
                        <div class="flex-middle">
                            <IconLabel label="beskrivelse" icon="info-circle">
                                {description}
                            </IconLabel>
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
                                    <span>
                                        <WebLink link={link} />
                                        <br />
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            {tags.map((tag) => <Tag {...tag} />)}
                        </div>
                    </div>
                </sl-card>
            ))}
            <div></div>
        </section>
    );
};
