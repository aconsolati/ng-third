import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IItemStockBatchOnHandInfo } from './item-batch';
import { BlueSkyApiService } from '../services/bluesky-api.service'

@Injectable()
export class ItemBatchViewService {

    constructor(private _api: BlueSkyApiService) { }

    getItemBatches(listFilter: string): Observable<IItemStockBatchOnHandInfo[]> {
        var query = "?itemCodes=191970&stockLocationID=1";
        // if (listFilter && listFilter.length > 0)
        // {
        //     query = "?*pattern";
        //     query = query.replace("*pattern", listFilter);
        // }
        console.log(query);
        return this._api.getSearch("ItemBatches", query);
    }
}
