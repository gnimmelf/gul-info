import { Component, createMemo, JSXElement, Show, Suspense } from 'solid-js';

import { Loading } from './Loading';
import { useService } from '~/solid-js/ui/providers/ServiceProvider';

export const AccountHead: Component<{
  children: JSXElement;
}> = (props) => {
  const { account } = useService();

  const user = () => account()?.resources.user();

  return (
    <Suspense fallback={<Loading size="large"></Loading>}>
      {props.children}
      <Show when={user()}>
        {user()?.name}
        <sl-button on:click={() => account()?.logout()}>Logout</sl-button>
      </Show>
    </Suspense>
  );
};
