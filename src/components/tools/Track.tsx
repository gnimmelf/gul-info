import {
  Component,
  createEffect,
  createReaction,
  createResource,
  createSignal,
  getOwner,
  onMount,
  untrack,
} from "solid-js";
import { throwToOwner } from "~/lib/utils";
import { StateGetter } from "~/types";

type Deferred<T> = {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
  isResolved: boolean;
  isRejected: boolean;
  isPending: boolean;
};

function createDeferredPromise<T>(): Deferred<T> {
  let resolve!: (value: T | PromiseLike<T>) => void;
  let reject!: (reason?: any) => void;
  let isResolved = false;
  let isRejected = false;

  const promise = new Promise<T>((res, rej) => {
    resolve = (value) => {
      if (!isResolved && !isRejected) {
        isResolved = true;
        res(value);
      }
    };
    reject = (reason) => {
      if (!isResolved && !isRejected) {
        isRejected = true;
        rej(reason);
      }
    };
  });

  return {
    promise,
    resolve,
    reject,
    get isResolved() {
      return isResolved;
    },
    get isRejected() {
      return isRejected;
    },
    get isPending() {
      return !isResolved && !isRejected;
    },
  };
}

/**
 * Component that tracks a action based on a trigger signal.
 * - Triggers any parent Suspense or ErrorBoundary
 *
 * NOTE! `props.done` *must* be tracked in the reactive scope, meaning it must contain a signal-read
 *
 * @param props.load Funtion to start some async operation
 * @param props.done Reactive function to check if async operation is done
 * @returns
 */
export const Track: Component<{
  trigger: () => boolean;
  action: () => Promise<void>;
}> = (props) => {
  const owner = getOwner();

  const [deferred, setDeferred] = createSignal(createDeferredPromise<null>());

  // Prepare a resource
  const [resource] = createResource(
    () => {
      if (!props.trigger()) {
        deferred().resolve(null);
      }
      return deferred().isResolved ? true : deferred().promise;
    },
    async () => {
      return await deferred().promise;
    },
  );

  const runAction = () => {
    props
      .action()
      .catch(throwToOwner(owner!))
  }

  createEffect(() => {
    if (props.trigger() && resource.state === 'ready') {
      // Start a new async operation, so recreate the promise that triggers suspense
      setDeferred(createDeferredPromise<null>())
      runAction();
    }
  });

  // Run initial
  runAction();

  return <>{resource()}</>;
};
