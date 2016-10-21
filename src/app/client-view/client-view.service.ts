import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IClient } from './client';
import { BlueSkyApiService } from '../services/bluesky-api.service'


@Injectable()
export class ClientViewService {

    constructor(private _api: BlueSkyApiService) { }

    getClients(listFilter: string): Observable<IClient[]> {
        var query = "Clients?$top=20";
        if (listFilter && listFilter.length > 0)
        {
            query += "&$filter=startswith(Surname,'pattern')";
            query = query.replace("pattern", listFilter);
        }
        return this._api.getQueryOdata(query);
    }
}
