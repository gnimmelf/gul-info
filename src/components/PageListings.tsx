import { Component, Suspense } from "solid-js";

import { styler } from "~/lib/styler";

import { Filters } from "~/core/repository";

import { WebLink } from "./partials/WebLink";
import { Phone } from "./partials/Phone";
import { Address } from "./partials/Address";
import { IconLabel } from "./partials/IconLabel";
import { useService } from "./ServiceProvider";
import { Loading } from "./partials/Loading";
import { ProductFilters } from "./partials/ProductFilters";

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

  const handleFilterChange = (
    next: Filters,
    mergeFilters?: boolean,
  ) =>
    setFilters((prev) => {
      const parsed ={}
      if (mergeFilters) {
        Object.assign(parsed, prev, next)
      }
      else {
        for (const key in next) {
          //@ts-ignore
          parsed[key] = prev[key] === next[key] ? '' : next[key]
        }
      }
      console.dir({ filters: parsed })
      return parsed
    });

  return (
    <section>
      <ProductFilters
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
              <div class={css.cardBody}>
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
                {tags.map((tag) => (
                  <sl-tag
                    style={{cursor: 'pointer'}}
                    prop:variant="primary"
                    prop:size="small"
                    on:click={() => {
                      handleFilterChange({
                        tag: tag.key,
                      }, true /* Use merge to keep in listing */);
                    }}
                  >{tag.name}</sl-tag>
                ))}
              </div>
            </div>
          </sl-card>
        ))}
      </Suspense>
    </section>
  );
};
