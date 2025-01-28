import { getProperty } from 'dot-prop';
import { Setter, Component, createEffect, For, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { deepCopy, deepEqual } from '~/shared/lib/utils';

const log = (...args: any[]) => console.log('playground', ...args)

export const Playground: Component<{}> = (props) => {
  const [s1, setS1] = createStore({
    a: [{ a1: { a2: 'Flemming' } }],
    b: {
      c: 'Hansen',
    },
  });

  const [s2, setS2] = createStore(deepCopy(s1));

  createEffect(() => log( getProperty(s1, 'a[0].a1')));

  const a = 'a'
  const b = 'a'

  return (
    <section>
      <pre>{JSON.stringify(deepEqual(a, b), null, 2)}</pre>
      <pre>{JSON.stringify(s1, null, 2)}</pre>
      <pre>{JSON.stringify(s2, null, 2)}</pre>
    </section>
  );
};
