import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { IClient } from './client';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClientViewService {

    constructor(private _http : Http) { }
    //private _url = 'http://devplaybox.rxworks.com/rxapi/odata/Clients?$top=10';
    // private _url = 'http://localhost:3755/api/values';
    private _url = "http://localhost:455/odata/Clients?$top=1";
    //private _url = "http://localhost:9041/api/values";
    //private _url = "http://localhost:455/odata/Version";

    getClients(listFilter: string) {
        var headers = new Headers();
        headers.append("Authorization", "Basic U1VQOmZ1YWg3MTc1");
        headers.append("Alias", "MAIN");
        headers.append("Clinic-Code", "1");
        headers.append("Content-Type", "application/json");
        
        var url = this._url;
        //url += "?$filter=Surname eq '" + listFilter + "'";

        //this._http.get(this._clientUrl, headers).map((response: Response) => <IClient[]>(response.json().value)).do(clients => this._clients = clients);
        var result = this._http.get(url, { headers: headers }).map((response: Response) => response.json().value);        
        console.log(result.toString()); 
        return result;
        //return Observable.of(this._clients);
    }

    private extractData(res: Response) {
        let body = res.json();
        alert(body);
        return body.value || { };
    }

}
