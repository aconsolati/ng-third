import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IItemBatch } from './item-batch';
import { BlueSkyApiService } from '../services/bluesky-api.service'

@Injectable()
export class ItemBatchViewService {

    constructor(private _api: BlueSkyApiService) { }

    getItemBatches(listFilter: string): Observable<IItemBatch[]> {
        var query = "?itemCodesCsv=10&stockLocationID=1";
        if (listFilter && listFilter.length > 0)
        {
            query = "?*pattern";
            query = query.replace("*pattern", listFilter);
        }
        console.log(query);
        return this._api.getQuery("Search", "ItemBatches", query);
    }
}
