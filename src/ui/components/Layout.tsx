import { Component, ErrorBoundary, JSXElement, Suspense } from 'solid-js';

import { join, styler, loadFontFace } from '~/ui/lib/styler';
import { PAGES } from '../lib/enums';
import { Loading } from './Loading';
import { useService } from '~/ui/providers/ServiceProvider';

loadFontFace(
  'Playwrite HU',
  "url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')",
  {
    'font-optical-sizing': 'auto',
    'font-weight': '400',
    'font-style': 'normal',
  },
);

styler
  .setContext({
    prefix: 'gifo',
    theme: {
      colorPrimary: 'var(--gifo-color-primary)',
      colorOnPrimary: 'var(--gifo-color-on-primary)',
      colorAccent: 'var(--gifo-color-accent)',
      fontSizeLg: '2rem',
      fontSizeMd: '1.2rem',
      breakPointSm: '600px',
      spaceY: 'var(--sl-spacing-medium)',
    },
  })
  .globals({
    ':root': ({ theme }) => ({
      '--breakpoint-sm': theme.breakPointSmall,
    }),
    /* Global scrollbar styles */
    '::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent thumb
      borderRadius: '4px', // Rounded edges for the thumb
      transition: 'background-color 0.2s', // Smooth transition
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker thumb on hover
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent', // Fully transparent track
    },
    /* Firefox-specific scrollbar styles */
    '.scrollable-element': {
      scrollbarWidth: 'thin', // Thin scrollbar
      scrollbarColor: 'rgba(0, 0, 0, 0.5) transparent', // Thumb and track colors
    },
    'a, a:hover, a:visited': ({ theme }) => ({
      textDecoration: 'none',
      color: theme.colorOnPrimary,
    }),
  });

const css = styler.css({
  app: ({ theme }) => ({
    padding: '10px 15px',
    color: theme.colorOnPrimary,
    backgroundColor: theme.colorPrimary,
    font: '16px var(--sl-font-sans)',
    fontWeight: 'var(--sl-font-weight-normal)',
  }),
  border: ({ theme }) => ({
    borderRadius: '10px',
    border: '5px solid',
    borderColor: theme.colorAccent,
  }),
  header: ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  title: ({ theme }) => ({
    fontFamily: "'Playwrite HU', sans-serif",
    fontSize: theme.fontSizeLg,
  }),
  user: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
  }),
});

export const Layout: Component<{
  title: string;
  selectedPage: PAGES;
  toggleMainPages: () => void;
  children: JSXElement;
}> = (props) => {
  const { account } = useService();

  return (
    <div class={join(css.app, css.border)}>
      <section class={css.header}>
        <div>
          <h1 class={css.title}>{props.title}</h1>
        </div>
        <div class={css.user}>
          <sl-icon-button
            style="font-size: 20px;"
            prop:name={
              props.selectedPage === PAGES.LISTINGS
                ? 'person-circle'
                : 'arrow-left-circle'
            }
            on:click={props.toggleMainPages}
          />
          {account()?.userData()?.name}
        </div>
      </section>
      <ErrorBoundary
        fallback={(error) => {
          console.error(error);
          return <div>Error: {error.message}</div>;
        }}
      >
        <Suspense fallback={<Loading />}>{props.children}</Suspense>
      </ErrorBoundary>
    </div>
  );
};
