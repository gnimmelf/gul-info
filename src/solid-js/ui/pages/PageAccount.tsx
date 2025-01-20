import { Component, createEffect, createMemo, onMount, Show } from 'solid-js';

import { join, styler } from '~/shared/lib/styler';
import { useService } from '~/solid-js/ui/providers/ServiceProvider';

const css = styler.css({});

export const PageAccount: Component<{}> = (props) => {
  const { account } = useService();

  const mustVerifyEmail = createMemo(() => account()?.mustVerifyEmail());
  const isLoggedIn = createMemo(() => account()?.resources.userData());

  return (
    <section>
      <Show when={!isLoggedIn()}>
        <sl-alert prop:variant="warning" prop:open={!!mustVerifyEmail()}>
          <sl-icon slot="icon" prop:name="exclamation-triangle"></sl-icon>
          <strong>
            Vi har sendt en verifiserings-e-post til {mustVerifyEmail()}.
          </strong>
          <br />
          Verifiser e-postadressen din der og fortsett deretter innlogging
          under.
        </sl-alert>

        <div>
          <Show when={!mustVerifyEmail()}>
            <sl-button on:click={() => account()?.login()}>Logg inn</sl-button>
          </Show>
          <Show when={mustVerifyEmail()}>
            <sl-button-group prop:label="Alignment">
              <sl-button
                prop:variant="primary"
                on:click={() => account()?.login()}
              >
                Fortsett innlogging
              </sl-button>
              <sl-button on:click={() => account()?.logout()}>
                Avbryt / Log inn med en annen e-post
              </sl-button>
            </sl-button-group>
          </Show>
        </div>
      </Show>

      <Show when={isLoggedIn()}>
        <sl-button on:click={() => account()?.logout()}>Logout</sl-button>
        <pre>{JSON.stringify(account()?.resources.userData())}</pre>
        <pre>{JSON.stringify(account()?.resources.listings())}</pre>
      </Show>
    </section>
  );
};
