import { createResource } from 'solid-js';

import { withReactiveState } from './withReactiveState';
import { Filters } from '../../domains/directory/Filters';
import { DirectoryService } from '../../domains/directory/DirectoryService';
import { IDatabase } from '../../domains/database/IDatabase';
import { checkAdapterReturnType } from './ensureAdapterShape';

export const createDirectoryServiceAdapter = async (db: IDatabase) => {
  const filters = withReactiveState(Filters.from({ indexLetter: 's' }));

  const instance = new DirectoryService(db);

  const [tags] = createResource(() => instance.loadTags());

  const [indexLetters] = createResource(() => instance.loadIndexLetters());

  const [listings] = createResource(
    () => filters.state(),
    (filters) => instance.loadListings(filters),
  );

  const adapter = checkAdapterReturnType({
    filters,
    resources: {
      tags,
      indexLetters,
      listings,
    },
  });

  return adapter;
};
