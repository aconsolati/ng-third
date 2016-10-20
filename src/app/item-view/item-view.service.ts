import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IItem } from './item';
import { BlueSkyApiService } from '../services/bluesky-api.service'


@Injectable()
export class ItemViewService {

    constructor(private _api: BlueSkyApiService) { }

    getItems(listFilter: string): any {
        var query = "?word=Insulin";
        if (listFilter && listFilter.length > 0)
        {
            query = "?word=*pattern";
            query = query.replace("*pattern", listFilter);
        }
        console.log(query);
        return this._api.getQuery("Search", "Items", query);
    }
}
