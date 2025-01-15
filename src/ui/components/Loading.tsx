import { Component, JSXElement } from 'solid-js';

import { join, styler } from '~/ui/lib/styler';

const css = styler.css({
  centered: ({ theme }) => ({
    textAlign: 'center',
  }),
});

export const Loading: Component<{
  children?: JSXElement;
}> = (props) => (
  <div class={join('loading', css.centered)}>
    <sl-spinner style="font-size: 50px; --track-width: 10px;"></sl-spinner>
    <div>{props.children}</div>
  </div>
);
