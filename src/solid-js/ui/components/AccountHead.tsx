import { Component, createEffect, JSXElement, Suspense } from 'solid-js';

import { Loading } from './Loading';
import { useService } from '~/solid-js/ui/providers/ServiceProvider';

export const AccountHead: Component<{
  children: JSXElement;
}> = (props) => {
  const { account } = useService();

  createEffect(() => account()?.initialize());

  return (
    <Suspense fallback={<Loading size="small"></Loading>}>
      {props.children}
      {account()?.resources.userData()?.name}
    </Suspense>
  );
};
