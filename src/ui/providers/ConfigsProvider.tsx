import {
  Component,
  createContext,
  createResource,
  JSXElement,
  Show,
  useContext,
  createEffect,
} from 'solid-js';

import ConfigsService from '~/features/configs/ConfigsService';
import {
  configsFactory,
  ConfigsState,
} from '~/shared/infrastructure/factories';
import { MergeServiceState } from '~/shared/services/withReactiveState';

// Define the context type
type ConfigsContextType = MergeServiceState<ConfigsService, ConfigsState>;

// Create the context
const ConfigsContext = createContext<ConfigsContextType>();

// Provider component
export const ConfigsProvider: Component<{
  children: JSXElement;
}> = (props) => {
  const [configs] = createResource(() =>
    configsFactory('https://intergate.io/configs/gul-info-hurdal'),
  );

  createEffect(() => console.log(configs()?.state()));

  return (
    <Show when={configs()}>
      <ConfigsContext.Provider value={() => configs()}>
        {props.children}
      </ConfigsContext.Provider>
    </Show>
  );
};

// Use-hook
export const useConfigs = () => {
  const context = useContext(ConfigsContext);
  if (!context) {
    throw new Error('useConfigs must be used within an ConfigsProvider');
  }
  return context;
};
