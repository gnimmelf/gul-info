import { IDatabase } from './IDatabase';
import { SurrealDbAdapter, SurrealConfig } from './infrastructure/SurrealDbAdapter';

export const createDatabaseAdapter = async (
  surrealConfig: SurrealConfig,
): Promise<IDatabase> => {
  const instance = new SurrealDbAdapter(surrealConfig);
  await instance.initialize();
  return instance;
};
