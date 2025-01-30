
import { timeout } from '~/shared/lib/utils';
import { IDatabase } from '~/domains/infrastructure/database/IDatabase';

import { Listing } from '~/shared/models/listing/Listing';
import { FilterSchemaType } from '~/shared/models/Filters';
import { ListingViewModel } from '../../../shared/models/listing/ListingViewModel';
import { CreateListingDtoSchemaType } from '~/shared/models/listing/CreateListingDto';
import { UpdateListingDtoSchemaType } from '~/shared/models/listing/UpdateListingDto';

/**
 * Class
 */
export class ListingsService {
    private db: IDatabase;

    constructor(db: IDatabase) {
        this.db = db;
    }

    public async loadListingsByFilters(filters: FilterSchemaType) {
        await timeout();
        const data = await this.db.getListingsByFilters(filters);
        const res = data
          .sort((a, b) => (a.title < b.title ? -1 : 1))
          .map((data) => ListingViewModel.from(data));
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

    public async createListing(listing: CreateListingDtoSchemaType) {
        await timeout(500);
        // const data = await this.db.createListing(listing);
        return { created: true }
    }

    public async updateListing(listing: UpdateListingDtoSchemaType) {
        await timeout(500);
        // const data = await this.db.updateListing(listing);
        return { updated: true }
    }

}