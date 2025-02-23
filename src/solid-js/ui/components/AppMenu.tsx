import { Component, JSXElement, Match, Show, Suspense, Switch } from 'solid-js';

import { Loading } from './Loading';
import { useService } from '~/solid-js/ui/providers/ServiceProvider';
import { PAGES } from '~/solid-js/lib/enums';
import { useSystem } from '../providers/SystemProvider';

export const AppMenu: Component = (props) => {
  const { setCurrentPage } = useSystem();
  const { account } = useService();

  const user = () => account()?.resources.user();

  return (
    <Suspense fallback={<Loading size="large"></Loading>}>
      <sl-dropdown>
        <Switch>
          <Match when={!user()}>
            <sl-button prop:slot="trigger">
              <sl-icon slot="suffix" prop:name="list"></sl-icon>
            </sl-button>
          </Match>
          <Match when={user()}>
            <sl-button prop:slot="trigger">
              <sl-icon slot="suffix" prop:name="list"></sl-icon>
              {user()!.name}
            </sl-button>
          </Match>
        </Switch>

        <sl-menu>
          <sl-menu-item on:click={() => setCurrentPage(PAGES.LISTINGS)}>
            Gul info
            <sl-icon slot="prefix" prop:name="shop"></sl-icon>
          </sl-menu-item>

          <sl-menu-item on:click={() => setCurrentPage(PAGES.ACCOUNT)}>
            Min side
            <sl-icon slot="prefix" prop:name="person-circle"></sl-icon>
          </sl-menu-item>


          <Show when={user()}>
            <sl-divider />
            <sl-menu-item on:click={() => account()?.logout()}>
              Logout
              <sl-icon slot="prefix" prop:name="door-open"></sl-icon>
            </sl-menu-item>
          </Show>
        </sl-menu>
      </sl-dropdown>
    </Suspense>
  );
};
