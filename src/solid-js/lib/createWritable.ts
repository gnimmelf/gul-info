import { Accessor, createMemo, createSignal, Setter } from 'solid-js';

export function writableSignal<T, InitialValue>(
  initialValue: InitialValue,
): [() => T, (makeNewProducer: () => () => T) => void] {
  // Wrap the initial value in a getter function.
  const makeInitialProducer = () => () => initialValue as unknown as T;

  // Create an outer signal that holds the producer function.
  // We unwrap the "make" part so that the type defs for
  const [getProducer, setProducer] = createSignal<() => T>(
    makeInitialProducer(),
  );

  // Create a derived memo that always calls the current inner producer.
  const getValue = createMemo(() => getProducer()());

  // Return the reactive getter and a setter that swaps the inner getter.
  return [getValue, (makeNewProducer) => setProducer(makeNewProducer)];
}
