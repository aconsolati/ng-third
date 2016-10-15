import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlueSkyApiService {

  private _urlRoot = 'http://devplaybox.rxworks.com/rxapi/odata/';

  constructor(private _http: Http) { }

  getQuery(odataQuery: string): any {
        var headers = new Headers();
        headers.append("Authorization", "Basic U1VQOmZ1YWg3MTc1");
        headers.append("Alias", "MAIN");
        headers.append("Clinic-Code", "1");
        headers.append("Content-Type", "application/json");
        
        var url = this._urlRoot + odataQuery;

        //var result = this._http.get(url, { headers: headers }).map((response: Response) => response.json().value);

        var result = this._http.get(url, { headers: headers })
            .map((response: Response) => response.json().value)
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        return result;
    }

}
