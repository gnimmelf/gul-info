import { _State } from '~/shared/lib/_State';

import { IDatabase } from '../../infrastructure/database/IDatabase';

import { TagViewModel } from '../../../shared/models/TagViewModel';
import { IndexLetterViewModel } from '../../../shared/models/IndexLetterViewModel';

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
}
