import { IDatabase } from '~/features/database/IDatabase';
import { _ServiceState } from '~/shared/services/_ServiceState';

import { Filters, FiltersSchema, FiltersSchemaType } from './Filters';
import { Listing } from './Listing';
import { IndexLetter } from './IndexLetter';
import { Tag, TagSchemaType } from './Tag';

export type DirectoryState = {
  filters: Filters;
  listings: Listing[];
  indexLetters: IndexLetter[];
  tags: Tag[];
};

/**
 * Class
 */
export class DirectoryService extends _ServiceState<DirectoryState> {
  private db: IDatabase;

  constructor(db: IDatabase) {
    super({
      filters: Filters.from(FiltersSchema, async () => {
        await this.loadListings()
      }),
      tags: [],
      listings: [],
      indexLetters: []
    });
    this.db = db;
  }

  async initialize() {
    await Promise.all([this.loadIndex(), this.loadTags(), this.loadListings()]);
  }

  private async loadIndex() {
    const details = await this.db.getIndexLetters();
    const res = details
      .sort((a, b) => (a.letter < b.letter ? -1 : 1))
      .map((data) => IndexLetter.from(data));
    this.setState({ indexLetters: res });
  }

  private async loadTags() {
    const details = await this.db.getTags();
    const res = details
      .filter(({ usageCount }) => usageCount)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map((data) => Tag.from(data));
    this.setState({ tags: res });
  }

  private async loadListings() {
    const details = await this.db.getListings(this.state().filters);
    const res = details
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map((data) => Listing.from(data));
    this.setState({ listings: res });
  }
}
