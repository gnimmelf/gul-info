import { createResource } from 'solid-js';

import { ConfigsService } from '~/domains/configs/ConfigsService';
import { _State } from '../../shared/application/_State';
import { IConfigs } from '../../domains/configs/IConfigs';

export const createConfigsServiceAdaper = async (url: string) => {
  const adapter = new ConfigsService(url);
  const configs = await adapter.loadConfigs();
  return configs;
};
