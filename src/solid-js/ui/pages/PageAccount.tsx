import { Component, createMemo, Show } from 'solid-js';

import { useService } from '~/solid-js/ui/providers/ServiceProvider';
import ListingForm from '../components/ListingForm';
import { addCss, Theme } from '~/solid-js/ui/theme';

const css = addCss({});

export const PageAccount: Component<{}> = (props) => {
  const { account } = useService();

  const mustVerifyEmail = createMemo(() => account()?.mustVerifyEmail());
  const isLoggedIn = createMemo(() => account()?.resources.user());

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
        <ListingForm
          model={account()?.resources.user()}
          mode="create"
          onSubmit={(data) => console.log(data)}
          onCancel={() => console.log('Cancel')}
        />
      </Show>
    </section>
  );
};
