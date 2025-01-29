import { Component, createSignal, Match, Suspense, Switch } from 'solid-js';

import { PAGES } from '../lib/enums';

import { resolveStylesToString } from '~/shared/ui/theme';

import { ServiceProvider } from '~/solid-js/ui/providers/ServiceProvider';
import { CoreProvider } from '~/solid-js/ui/providers/SystemProvider';

import { Layout } from './components/Layout';
import { Loading } from './components/Loading';
import { PageListings } from './pages/PageListings';
import { PageAccount } from './pages/PageAccount';

const App: Component<{
  title: string;
  namespace: string;
  database: string;
  datapoint: string;
}> = (props) => {
  const PAGE_KEY = 'pageKey';
  const pageKey = window.localStorage.getItem(PAGE_KEY) || PAGES.LISTINGS;
  const [selectedPage, _setSelectedPage] = createSignal<PAGES>(
    pageKey as PAGES,
  );

  const setSelectedPage = (pageKey: PAGES) => {
    window.localStorage.setItem(PAGE_KEY, pageKey);
    _setSelectedPage(pageKey);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css"
      />
      <style id="styler">{resolveStylesToString()}</style>


      {/**
       * TODO! Add Solid (Memory?) Router
       * - Only *if* it also works with setting tabs on accountPage
       */}
      <Suspense fallback={<Loading>Gul info laster...</Loading>}>
        <CoreProvider>
          <ServiceProvider>
            <Layout
              title={props.title}
              selectedPage={selectedPage()}
              toggleMainPages={() =>
                setSelectedPage(
                  selectedPage() === PAGES.ACCOUNT
                    ? PAGES.LISTINGS
                    : PAGES.ACCOUNT,
                )
              }
            >
              <Switch>
                <Match when={selectedPage() === PAGES.LISTINGS}>
                  <PageListings />
                </Match>
                <Match when={selectedPage() === PAGES.ACCOUNT}>
                  <PageAccount />
                </Match>
              </Switch>
            </Layout>
          </ServiceProvider>
        </CoreProvider>
      </Suspense>
    </>
  );
};

export default App;
