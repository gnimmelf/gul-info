import { createResource, createSignal } from 'solid-js';

import { withReactiveState } from './withReactiveState';
import { Filters, TagsMatchType } from '../../shared/models/Filters';
import { DirectoryService } from '../../domains/ui/directory/DirectoryService';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { checkAdapterReturnType } from './checkAdapterReturnType';

export const createDirectoryServiceAdapter = async (db: IDatabase) => {
  const filters = withReactiveState(
    Filters.from({
      tagsMatchType: TagsMatchType.ANY,
    }),
  );

  const instance = new DirectoryService(db);

  const [tags] = createResource(() => instance.loadTags());

  const [indexLetters] = createResource(() => instance.loadIndexLetters());

  const adapter = checkAdapterReturnType({
    resources: {
      tags,
      indexLetters,
    },
    filters: () => filters,
  });

  return adapter;
};
