import {
  Component,
  createContext,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  JSXElement,
  Resource,
  Show,
  useContext,
} from 'solid-js';

import { createDatabaseAdapter } from '~/domains/database/createDatabaseAdapter';
import { createConfigsServiceAdaper } from '~/solid-js/application/createConfigsServiceAdaper';

type TConfigsAdapter = Awaited<ReturnType<typeof createConfigsServiceAdaper>>;
type TDbAdapter = Awaited<ReturnType<typeof createDatabaseAdapter>>;

interface TSystemContext {
  configs: () => TConfigsAdapter;
  db: () => TDbAdapter;
}

// Create the context
const SystemContext = createContext<TSystemContext>();

// Provider component
export const CoreProvider: Component<{
  children: JSXElement;
}> = (props) => {
  const initialize = async () => {
    const configs = await createConfigsServiceAdaper(
      'https://intergate.io/configs/gul-info-hurdal',
    );
    const db = await createDatabaseAdapter(configs.surreal);
    return {
      configs: () => configs,
      db: () => db,
    };
  };

  const [system] = createResource(initialize);

  return (
    <Show when={system()}>
      <SystemContext.Provider value={system()}>
        {props.children}
      </SystemContext.Provider>
    </Show>
  );
};

// Use-hook
export const useSystem = () => {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error('useSystem must be used within an CoreProvider');
  }
  return context;
};
