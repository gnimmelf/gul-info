import { createResource } from 'solid-js';

import { Filters, TagsMatchType } from '../../shared/models/Filters';
import { DirectoryService } from '../../domains/ui/directory/DirectoryService';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';
import { checkAdapterReturnType } from './checkAdapterReturnType';
import { createMutable } from 'solid-js/store';

export const createDirectoryServiceAdapter = async (db: IDatabase) => {
  const filters = createMutable(
    Filters.from({
      tagsMatchType: TagsMatchType.ANY,
    }),
  );

  const directoryService = new DirectoryService(db);

  const [tags] = createResource(() => directoryService.loadTags());

  const [indexLetters] = createResource(() =>
    directoryService.loadIndexLetters(),
  );

  const adapter = checkAdapterReturnType({
    resources: {
      tags,
      indexLetters,
    },
    filters,
  });

  return adapter;
};
