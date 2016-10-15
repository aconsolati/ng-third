import { Injectable } from '@angular/core';
//import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IClient } from './client';
import { BlueSkyApiService } from '../services/bluesky-api.service'


@Injectable()
export class ClientViewService {

    constructor(private _api: BlueSkyApiService) { }

    //private _url = 'http://devplaybox.rxworks.com/rxapi/odata/Clients?$top=2';
    //private _url = 'http://localhost:3755/api/values';
    //private _url = "http://localhost:455/odata/Clients?$top=1";
    //private _url = "http://localhost:9041/api/values";
    //private _url = "http://localhost:455/odata/Version";

    getClients(listFilter: string): Observable<IClient[]> {
        // var headers = new Headers();
        // headers.append("Authorization", "Basic U1VQOmZ1YWg3MTc1");
        // headers.append("Alias", "MAIN");
        // headers.append("Clinic-Code", "1");
        // headers.append("Content-Type", "application/json");
        
        // var url = this._url;

        //var result = this._http.get(url, { headers: headers }).map((response: Response) => response.json().value);

        var query = "Clients?$top=20";
        if (listFilter && listFilter.length > 0)
        {
            query += "&$filter=Client_Search eq 'listFilter'";
        }
        return this._api.getQuery(query);
    }

    // getClients(listFilter: string): Observable<IClient[]> {
    //     var headers = new Headers();
    //     headers.append("Authorization", "Basic U1VQOmZ1YWg3MTc1");
    //     headers.append("Alias", "MAIN");
    //     headers.append("Clinic-Code", "1");
    //     headers.append("Content-Type", "application/json");
        
    //     var url = this._url;

    //     //var result = this._http.get(url, { headers: headers }).map((response: Response) => response.json().value);

    //     var result = this._http.get(url, { headers: headers })
    //         .map((response: Response) => <IClient[]>response.json().value)
    //         .do(data => console.log("All: " + JSON.stringify(data)))
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    //     return result;
    // }
}
