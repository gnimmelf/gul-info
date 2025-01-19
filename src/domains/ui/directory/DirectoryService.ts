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
    const details = await this.db.getIndexLetters();
    const res = details
      .sort((a, b) => (a.letter < b.letter ? -1 : 1))
      .map((data) => IndexLetterViewModel.from(data));
    return res;
  }

  public async loadTags() {
    const details = await this.db.getTags();
    const res = details
      .filter(({ usageCount }) => usageCount)
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map((data) => TagViewModel.from(data));
    return res;
  }

  public async loadListings(filters: TFilterState) {
    await timeout();
    const details = await this.db.getListings(filters);
    const res = details
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map((data) => ListingViewModel.from(data));
    return res;
  }
}
