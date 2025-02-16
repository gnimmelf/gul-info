import { ConfigsService } from './infrastructure/ConfigsService';
import { IConfigs } from './IConfigs';

export const createConfigsServiceAdaper = async (url: string): Promise<IConfigs> => {
  const adapter = new ConfigsService(url);
  const configs = await adapter.loadConfigs();
  return configs;
};
