import { Component, Match, Switch } from 'solid-js';

import { PAGES } from '../lib/enums';

import { PageListings } from './pages/PageListings';
import { PageAccount } from './pages/PageAccount';
import { useSystem } from './providers/SystemProvider';

export const Routes: Component<{}> = (props) => {
  const { isCurrentPage } = useSystem();

  return (
    <Switch>
      <Match when={isCurrentPage(PAGES.LISTINGS)}>
        <PageListings />
      </Match>
      <Match when={isCurrentPage(PAGES.ACCOUNT)}>
        <PageAccount />
      </Match>
    </Switch>
  );
};