import { Component, createSignal, JSXElement } from 'solid-js';
import { addCss } from '~/solid-js/ui/theme';

const css = addCss({
  wrapper: {
    display: 'flex',
  },
  label: {
    paddingInlineStart: 'var(--sl-spacing-2x-small)',
  },
  icon: {
    minWidth: '20px',
  },
});

export const IconLabel: Component<{
  icon: string;
  label: string;
  children: JSXElement;
}> = (props) => {
  return (
    <span class={css.wrapper}>
      <sl-icon
        class={css.icon}
        prop:name={props.icon}
        prop:label={props.label}
      />
      <span class={css.label}>{props.children}</span>
    </span>
  );
};
