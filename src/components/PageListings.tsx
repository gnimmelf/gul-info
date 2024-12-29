import { Component, Suspense } from "solid-js";

import { styler } from "~/lib/styler";

import { WebLink } from "./partials/WebLink";
import { Tag } from "./partials/Tag";
import { Phone } from "./partials/Phone";
import { Address } from "./partials/Address";

import { IconLabel } from "./partials/IconLabel";
import { useService } from "./ServiceProvider";
import { Loading } from "./partials/Loading";
import { ListingsFilters } from "./partials/ListingsFilters";
import { FilterState } from "~/services/DirectoryService";

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

export const PageListings: Component = () => {
  const { directory } = useService();

  const { listings, filters, setFilters } = directory;

  const handleTagClick = (tagKey: string) => setFilters((prev) => ({ ...prev, tag: tagKey }));
  const handleFilterChange = (next: FilterState) => setFilters((prev) => ({ ...prev, ...next }));

  return (
    <section>
      <ListingsFilters
        loading={listings.loading}
        filterState={filters()}
        onFilterChange={handleFilterChange}
      />

      <Suspense fallback={<Loading />}>
        {listings()?.map((
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
                {tags.map((tag) => <Tag
                  {...tag}
                  onTagClick={handleTagClick}
                />)}
              </div>
            </div>
          </sl-card>
        ))}
      </Suspense>
    </section>
  );
};
