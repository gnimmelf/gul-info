import {
  Component,
  createResource,
  ErrorBoundary,
  JSXElement,
  Suspense,
} from "solid-js";

import { join, styler } from "~/lib/styler";

import { Loading } from "./partials/Loading";

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
  header: ({theme}) => ({
    display: "flex",
    justifyContent: "space-between"
  }),
  title: ({ theme }) => ({
    fontFamily: "'Playwrite HU', sans-serif",
    fontSize: theme.fontSizeLg,
  }),
});

export const Layout: Component<{
  title: string;
  children: JSXElement;
}> = (props) => {
  return (
    <div class={join(css.app, css.border)}>
      <section class={css.header}>
        <div>
          <h1 class={css.title}>{props.title}</h1>
        </div>
        <div>
          <sl-icon-button prop:name="gear" on:click={() => console.log("cog")} />
        </div>
      </section>
      <ErrorBoundary fallback={(error) => {
        console.error(error)
        return (<div>Error: {error.message}</div>)
      }}>
        <Suspense fallback={<Loading />}>
          {props.children}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
