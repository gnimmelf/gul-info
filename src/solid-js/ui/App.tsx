import { Component, Suspense } from 'solid-js';

import { resolveStylesToString } from '~/shared/ui/theme';

import { ServiceProvider } from '~/solid-js/ui/providers/ServiceProvider';
import { SystemProvider } from '~/solid-js/ui/providers/SystemProvider';

import { Layout } from './components/Layout';
import { Loading } from './components/Loading';
import { Routes } from './Routes';

const App: Component<{
  title: string;
  namespace: string;
  database: string;
  datapoint: string;
}> = (props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css"
      />
      <style id="styler">{resolveStylesToString()}</style>

      <Suspense fallback={<Loading>Gul info laster...</Loading>}>
        <SystemProvider>
          <ServiceProvider>
            <Layout title={props.title}>
              <Routes />
            </Layout>
          </ServiceProvider>
        </SystemProvider>
      </Suspense>
    </>
  );
};

export default App;
