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

  const [doInitialize, setDoInitialize] = createSignal(false);

  const [tags] = createResource(() => instance.loadTags());

  const [indexLetters] = createResource(() => instance.loadIndexLetters());

  const [listings] = createResource(
    () => doInitialize() || filters.state() ? filters.state() : false,
    (filterState) => instance.loadListings(filterState),
  );

  const adapter = checkAdapterReturnType({
    resources: {
      tags,
      indexLetters,
      listings,
    },
    initialize: () => setDoInitialize(true),
    filters: () => filters,
  });

  return adapter;
};
