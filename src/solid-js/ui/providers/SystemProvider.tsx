import {
  Component,
  createContext,
  createResource,
  JSXElement,
  Show,
  useContext,
} from 'solid-js';

import { createDatabaseAdapter } from '~/domains/infrastructure/database/createDatabaseAdapter';
import { createConfigsServiceAdaper } from '~/domains/infrastructure/configs/createConfigsServiceAdaper';
import { ResourceRegistry } from '~/solid-js/lib/ResourceRegistry';

type TConfigsAdapter = Awaited<ReturnType<typeof createConfigsServiceAdaper>>;
type TDbAdapter = Awaited<ReturnType<typeof createDatabaseAdapter>>;

interface TSystemContext {
  configs: TConfigsAdapter;
  db: TDbAdapter;
  resources: ResourceRegistry;
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

    const resources = new ResourceRegistry();

    return {
      configs,
      db,
      resources,
    };
  };

  const [system] = createResource(initialize);

  return (
    <Show when={system()}>
      <SystemContext.Provider value={system()}>{props.children}</SystemContext.Provider>
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
