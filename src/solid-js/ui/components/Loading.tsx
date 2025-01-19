import { Component, createMemo, JSXElement } from 'solid-js';

import { join, styler } from '~/shared/lib/styler';

enum SIZES {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const css = styler.css({
  centered: ({ theme }) => ({
    textAlign: 'center',
  }),
});

const styleSizes = styler.withContext(({ theme }) => ({
  small: `font-size: ${theme.fontSizeSm}; --trackwidth: 3px;`,
  medium: `font-size: ${theme.fontSizeMd}; --trackwidth: 5px;`,
  large: `font-size: ${theme.fontSizeLg}; --trackwidth: 10px;`,
}));

export const Loading: Component<{
  size?: keyof typeof SIZES;
  children?: JSXElement;
}> = (props) => {
  const spinnerKey = props.size || SIZES.large;

  const spinnerStyle = styleSizes()[spinnerKey];

  return (
    <div class={join('loading', css.centered)}>
      <sl-spinner style={spinnerStyle}></sl-spinner>
      <div>{props.children}</div>
    </div>
  );
};
