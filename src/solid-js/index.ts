import { customElement, hot } from 'solid-element';
import App from '~/solid-js/ui/App';

import '~/solid-js/lib/shoelace-setup';

declare module 'solid-js' {
  namespace JSX {
    // Prefixes all properties with `prop:` to match Solid's property setting syntax
    type Props<T> = {
      [K in keyof T as `prop:${string & K}`]?: T[K];
    };

    // Extends existing IntrinsicElements without overwriting
    interface IntrinsicElements
      extends Partial<{
        [P in keyof HTMLElementTagNameMap]: Props<HTMLElementTagNameMap[P]> &
          HTMLAttributes<HTMLElementTagNameMap[P]>;
      }> {}
  }
}

// https://blog.jim-nielsen.com/2023/validity-of-custom-element-tag-names/
customElement(
  'gul-info',
  {
    // Attrs, hyphenated (kebab-case) and lowercase, => props
    title: '<title>',
    namespace: '<namespace>',
    database: '<database>',
    datapoint: '<datapoint>',
  },
  App,
);
