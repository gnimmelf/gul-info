import { _State } from '~/shared/lib/_State';

import { IDatabase } from '../../infrastructure/database/IDatabase';

import { TFilterState } from './Filters';

import { TagViewModel } from './TagViewModel';
import { ListingViewModel } from './ListingViewModel';
import { IndexLetterViewModel } from './IndexLetterViewModel';
import { timeout } from '~/shared/lib/utils';

/**
 * Class
 */
export class DirectoryService {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  public async loadIndexLetters() {
    const data = await this.db.getIndexLetters();
    const res = data
      .sort((a, b) => (a.letter < b.letter ? -1 : 1))
      .map((data) => IndexLetterViewModel.from(data));
    return res;
  }

  public async loadTags() {
    const data = await this.db.getTags();
    const res = data
      .filter(({ usageCount }) => usageCount)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map((data) => TagViewModel.from(data));
    return res;
  }

  public async loadListings(filters: TFilterState) {
    await timeout();
    const data = await this.db.getListings(filters);
    const res = data
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map((data) => ListingViewModel.from(data));
    return res;
  }
}
