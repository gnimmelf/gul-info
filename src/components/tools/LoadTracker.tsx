import { Component, createResource, createSignal, getOwner } from "solid-js";
import { throwToOwner } from "~/lib/utils";
import { StateGetter } from "~/types";

/**
 * Component that tracks a loader that sets a signal on completion.
 * - Triggers any parent Suspense or ErrorBoundary
 *
 * NOTE! `props.done` *must* be tracked in the reactive scope, meaning it must contain a signal-read
 *
 * @param props.load Funtion to start some async operation
 * @param props.done Reactive function to check if async operation is done
 * @returns
 */
export const LoadTracker: Component<{
  load: () => void;
  done: () => boolean;
}> = (props) => {
  const owner = getOwner();

  // Prepare a resource that we gets rechecked
  const [suspend, setSuspend] = createSignal<Promise<any>>();
  const [resource] = createResource(
    () => {
      setSuspend(props.done()
        ? Promise.resolve('')
        : new Promise(() => {}))
      return suspend();
    },
    async (state) => {
      return await suspend();
    },
  );

  props.load().catch(throwToOwner(owner!));

  return <>{resource()}</>;
};
