import { Component, ErrorBoundary, JSXElement, Suspense } from 'solid-js';

import { PAGES } from '../../lib/enums';
import { Loading } from './Loading';
import { AppMenu } from './AppMenu';

import { addCss, join, Theme } from '~/shared/ui/theme';
import { useSystem } from '../providers/SystemProvider';

const css = addCss({
  app: (theme: Theme) => ({
    padding: '10px 15px',
    color: theme.colorOnPrimary,
    backgroundColor: theme.colorPrimary,
    font: '16px var(--sl-font-sans)',
    fontWeight: 'var(--sl-font-weight-normal)',
  }),
  border: (theme: Theme) => ({
    borderRadius: '10px',
    border: '5px solid',
    borderColor: theme.colorAccent,
  }),
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: (theme: Theme) => ({
    marginTop: '0px',
    marginBottom: '0px',
    fontSize: theme.fontSizeLg,
    cursor: 'pointer',
    '&>.logo': {
      fontSize: theme.fontSizeMd,
      fontFamily: "'Playwrite HU', sans-serif",
    },
  })
});

export const Layout: Component<{
  title: string;
  children: JSXElement;
}> = (props) => {
  const { setCurrentPage } = useSystem();

  return (
    <div class={join(css.app, css.border)}>
      <section class={css.header}>
        <div>
          <h1 class={css.title} on:click={() => setCurrentPage(PAGES.LISTINGS)}>
            <span class="logo">Gul Info</span>
            <br />
            {props.title}
          </h1>
        </div>
        <div>
          <AppMenu />
        </div>
      </section>
      <ErrorBoundary
        fallback={(error) => {
          console.error(error);
          return <div>Error: {error.message}</div>;
        }}
      >
        <Suspense fallback={<Loading>Layout</Loading>}>{props.children}</Suspense>
      </ErrorBoundary>
    </div>
  );
};
