import { Component, createEffect, JSXElement, onMount, Suspense } from 'solid-js';

import { Loading } from './Loading';
import { useService } from '~/solid-js/ui/providers/ServiceProvider';

export const AccountHead: Component<{
  children: JSXElement;
}> = (props) => {
  const { account } = useService();

  return (
    <Suspense fallback={<Loading size="large"></Loading>}>
      {props.children}
      {account()?.resources.userData()?.name}
    </Suspense>
  );
};
