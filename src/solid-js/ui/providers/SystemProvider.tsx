import {
  Component,
  createContext,
  createResource,
  createSignal,
  JSXElement,
  Show,
  useContext,
} from 'solid-js';

import { createDatabaseAdapter } from '~/domains/infrastructure/database/createDatabaseAdapter';
import { createConfigsServiceAdaper } from '~/domains/infrastructure/configs/createConfigsServiceAdaper';
import { ResourceRegistry } from '~/solid-js/lib/ResourceRegistry';
import { PAGES } from '~/solid-js/lib/enums';

type TConfigsAdapter = Awaited<ReturnType<typeof createConfigsServiceAdaper>>;
type TDbAdapter = Awaited<ReturnType<typeof createDatabaseAdapter>>;

interface TSystemContext {
  configs: TConfigsAdapter;
  db: TDbAdapter;
  resources: ResourceRegistry;
  setCurrentPage: (pageKey: PAGES) => void;
  isCurrentPage: (pageKey: PAGES) => boolean;
}

// Create the context
const SystemContext = createContext<TSystemContext>();

// Provider component
export const SystemProvider: Component<{
  children: JSXElement;
}> = (props) => {
  const initialize = async () => {
    const configs = await createConfigsServiceAdaper(
      'https://intergate.io/configs/gul-info-hurdal',
    );

    const db = await createDatabaseAdapter(configs.surreal);

    const resources = new ResourceRegistry();

    const PAGE_KEY = 'pageKey';
    const pageKey = window.localStorage.getItem(PAGE_KEY) || PAGES.LISTINGS;
    const [_currentPage, _setCurrentPage] = createSignal<PAGES>(pageKey as PAGES);

    function setCurrentPage (pageKey: PAGES) {
      window.localStorage.setItem(PAGE_KEY, pageKey);
      _setCurrentPage(pageKey);
    };

    function isCurrentPage(pageKey: PAGES) {
      return _currentPage() === pageKey;
    }

    return {
      configs,
      db,
      resources,
      isCurrentPage,
      setCurrentPage,
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
    throw new Error('useSystem must be used within an SystemProvider');
  }
  return context;
};
