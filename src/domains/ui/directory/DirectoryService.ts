import { IDatabase } from '../../infrastructure/database/IDatabase';

import { TagViewModel } from '../../../shared/models/TagViewModel';
import { IndexLetterViewModel } from '../../../shared/models/IndexLetterViewModel';
import { timeout } from '~/shared/lib/utils';
import { Filters } from '~/shared/models/Filters';
import { ListingViewModel } from '~/shared/models/listing/ListingViewModel';

/**
 * Class
 */
export class DirectoryService {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  public async loadIndexLetterUsages() {
    const data = await this.db.getIndexLetterUsages();
    const res = data
      .sort((a, b) => (a.letter < b.letter ? -1 : 1))
      .map((data) => IndexLetterViewModel.from(data));
    return res;
  }

  public async loadTagUsages() {
    const data = await this.db.getTagUsages();
    const res = data
      .filter(({ usageCount }) => usageCount)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map((data) => TagViewModel.from(data));
    return res;
  }

  public async loadListingsByFilters(filters: Filters.SchemaType) {
    await timeout();
    const data = await this.db.getListingsByFilters(filters);
    const res = data
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map((data) => ListingViewModel.from(data));
    return res;
  }
}
