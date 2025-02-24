import { Component, createEffect, createMemo, createSignal, For, Show } from 'solid-js';

import { useService } from '~/solid-js/ui/providers/ServiceProvider';
import { addCss, Theme, join } from '~/shared/ui/theme';
import { MyListings } from '../components/MyListings';

const css = addCss({
  section: (theme: Theme) => ({
    marginBottom: theme.gapMd,
  }),
  center: (theme: Theme) => ({
    textAlign: 'center',
  }),
  controls: (theme: Theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: theme.gapMd,
  }),
});

export const PageAccount: Component<{}> = (props) => {
  const { account } = useService();

  const [disableResend, setDisableResend] = createSignal(false);

  function resendVerificationEmail() {
    setDisableResend(true);
    const sendTime = account()!.resendVerificationEmail();
    const timeOut = 5000 + sendTime.getTime();
    setTimeout(() => setDisableResend(true), timeOut)
  }

  const mustVerifyEmail = createMemo(() => account()?.mustVerifyEmail());
  const isLoggedIn = createMemo(() => account()?.resources.user());

  return (
    <section>
      <Show when={!isLoggedIn()}>
        <div class={join(css.section)}>
          <sl-alert prop:variant="warning" prop:open={Boolean(mustVerifyEmail())}>
            <sl-icon slot="icon" prop:name="exclamation-triangle"></sl-icon>
            <strong>Vi har sendt en verifiserings-e-post til {mustVerifyEmail()}.</strong>
            <br />
            Verifiser e-postadressen din der og fortsett deretter innlogging under.
          </sl-alert>
        </div>

        <div class={join(css.section, css.center)}>
          <Show when={!mustVerifyEmail()}>
            <sl-button on:click={() => account()?.login()}>
              Logg inn / Opprett konto
            </sl-button>
          </Show>

          <Show when={mustVerifyEmail()}>
            <div class={css.controls}>
              <sl-button prop:variant="primary" on:click={() => account()?.login()}>
                Fortsett innlogging
              </sl-button>
              <sl-button
                prop:variant="default"
                prop:disabled={disableResend()}
                on:click={resendVerificationEmail}
              >
                Send verifiserings-e-post på nytt
              </sl-button>
              <sl-button prop:variant="danger" on:click={() => account()?.logout()}>
                Avbryt / Log inn med en annen e-post
              </sl-button>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={isLoggedIn()}>
        <MyListings />
      </Show>
    </section>
  );
};
