import { createResource, createSignal } from 'solid-js';

import { withReactiveState } from './withReactiveState';
import { Filters, TagsMatchType } from '../../domains/ui/directory/Filters';
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

  const [listings] = createResource(
    () => (filters.state() ? filters.state() : false),
    (filterState) => instance.loadListings(filterState),
  );

  const adapter = checkAdapterReturnType({
    resources: {
      tags,
      indexLetters,
      listings,
    },
    filters: () => filters,
  });

  return adapter;
};
