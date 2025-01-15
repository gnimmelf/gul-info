import { createEffect, createResource, createSignal, Resource } from 'solid-js';

import { ConfigsService } from '~/domains/configs/ConfigsService';
import { withReactiveState } from './withReactiveState';
import { _State } from '~/shared/application/_State';
import { IAccount } from '~/domains/account/IAccount';
import { IAuthentication } from '~/domains/authentication/IAuthentication';
import { Auth0Adapter } from '~/domains/authentication/infrastructure/Auth0Adapter';

export const createAccountServiceAdaper = (url: string) => {
  const auth = new Auth0Adapter(configs.auth0);

  const auth = withReactiveState<ConfigsService, IAuthentication>(
    new Auth0Adapter(url),
  );

  const [initialize] = createResource<IConfigs>(async () => {
    await instance.initialize();
    return instance.state();
  });

  const adapter = {
    resources: {
      initialize,
    },
    signals: {},
    state: instance.state.bind(instance) as () => IConfigs,
  };

  return adapter;
};
