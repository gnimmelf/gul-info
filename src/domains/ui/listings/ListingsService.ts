import { timeout } from '~/shared/lib/utils';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';

import { Listing } from '~/shared/models/listing/Listing';
import { CreateListingDto } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDto } from '~/shared/models/listing/UpdateListingDto';
import { TagViewModel } from '~/shared/models/TagViewModel';

/**
 * Class
 */
export class ListingsService {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  public async loadTags() {
    await timeout();
    const data = await this.db.getTags();
    const res = data
      .sort((a, b) => (a.name < b.name ? -1 : 1))
      .map((data) => TagViewModel.from(data));
    return res;
  }

  public async loadListingsByEmail(email: string) {
    await timeout();
    const data = await this.db.getListingsByEmail(email);
    const res = data
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map((data) => Listing.from(data));
    return res;
  }

  public async createListing(listing: CreateListingDto) {
    await timeout(500);
    const data = await this.db.createListing(listing.data);
    return Listing.from({ ...listing, ...data });
  }

  public async updateListing(listing: UpdateListingDto) {
    await timeout(500);
    const res = await this.db.updateListing(listing.data);
    return Listing.from({ ...listing.data, ...res });
  }

  public async deleteListing(listingId: string) {
    await timeout(500);
    const res = await this.db.deleteListing(listingId);
    return res;
  }
}
