import {
  Component,
  createSignal,
} from "solid-js";

import { styler } from "~/lib/styler";

import { Track } from "./tools/Track";

import { WebLink } from "./partials/WebLink";
import { Tag } from "./partials/Tag";
import { Phone } from "./partials/Phone";
import { Address } from "./partials/Address";

import { IconLabel } from "./partials/IconLabel";
import { useService } from "./ServiceProvider";

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

  const [filters, setFilters] = createSignal(0)

  const reload = () => {
    setFilters(prev => prev +1)
    directory.clearState()
  }

  return (
    <section>
      <Track
        trigger={() => !directory.state()}
        action={() => directory.loadData(filters())}
      />

      <button on:click={() => reload()}>Reload {filters()+1}</button>

      {directory.state()?.map((
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
    </section>
  );
};
