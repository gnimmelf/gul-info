import { Component, createEffect, createMemo, onMount, Show } from 'solid-js';

import { join, styler } from '~/shared/lib/styler';
import { useService } from '~/solid-js/ui/providers/ServiceProvider';

const css = styler.css({});

export const PageAccount: Component<{}> = (props) => {
  const { account } = useService();

  const isAuthenticated = createMemo(() =>
    account()?.resources.isAuthenticated(),
  );
  const isVerifiying = createMemo(() => account()?.resources.authData()?.email_verified === false);
  const isLoggedIn = createMemo(() => isAuthenticated() && !isVerifiying());

  return (
    <section>
      <Show when={!isAuthenticated()}>
        <sl-alert prop:variant="warning" prop:open={isVerifiying()}>
          <sl-icon slot="icon" prop:name="exclamation-triangle"></sl-icon>
          <strong>
            Vi har sendt en verifiserings-e-post til{' '}
            {account()?.resources.authData()?.email}.
          </strong>
          <br />
          Verifiser e-postadressen din der og fortsett deretter innlogging
          under.
        </sl-alert>

        <div>
          <Show when={!isVerifiying()}>
            <sl-button on:click={() => account()?.login()}>Logg inn</sl-button>
          </Show>
          <Show when={isVerifiying()}>
            <sl-button-group prop:label="Alignment">
              <sl-button
                prop:variant="primary"
                on:click={() => account()?.login()}
              >
                Fortsett innlogging
              </sl-button>
              <sl-button on:click={() => account()?.logout()}>
                Log inn med en annen e-post
              </sl-button>
            </sl-button-group>
          </Show>
        </div>
      </Show>

      <Show when={isLoggedIn()}>
        <sl-button on:click={() => account()?.logout()}>Logout</sl-button>
        <pre>{JSON.stringify(account()?.resources.userData())}</pre>
      </Show>
    </section>
  );
};
