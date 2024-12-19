import { Component, createEffect, createResource, Suspense } from "solid-js";

import { join, styler } from "~/lib/styler";

import { WebLink } from "./partials/WebLink";
import { Tag } from "./partials/Tag";
import { Phone } from "./partials/Phone";
import { Address } from "./partials/Address";

import { IconLabel } from "./partials/IconLabel";
import { useService } from "./ServiceProvider";
import { Loading } from "./partials/Loading";

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
    const { getDb } = useService();

    const fetchListings = async () => {
        return (await getDb()).queryRaw("SELECT * FROM listings;")
            .then((resp) => resp[0].result);
    };

    const [listings] = createResource<any[]>(fetchListings);

    createEffect(() => console.log(listings.state, listings()));

    return (
        <section>
            <Suspense fallback={<Loading />}>
                {listings() && listings().map((
                    { title, description, links, tags, ...contact },
                ) => (
                    <sl-card class={css.card}>
                        <div slot="header" class={css.cardHeader}>
                            <div class={css.title}>{title}</div>
                            <div class="flex-middle">
                                <IconLabel
                                    label="beskrivelse"
                                    icon="info-circle"
                                >
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
            </Suspense>
        </section>
    );
};
