import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlueSkyApiService {

  //private _url = 'http://devplaybox.rxworks.com/rxapi/odata/Clients?$top=2';
  //private _url = 'http://localhost:3755/api/values';
  //private _url = "http://localhost:455/odata/Clients?$top=1";
  //private _url = "http://localhost:9041/api/values";
  //private _url = "http://localhost:455/odata/Version";
  private _urlRootOdata = 'http://devplaybox.rxworks.com/rxapi/odata/';
  private _urlRoot = 'http://devplaybox.rxworks.com/rxapi/api/';

  constructor(private _http: Http) { }

  // odataQuery: the resource and any additional odata query params,
  // eg: Clients?$filter=startswith(Client_Search, 'smi')
  getQueryOdata(odataQuery: string): any {
    
      // format request url
      var url = this._urlRootOdata + odataQuery;
      console.log(url);

      // send request
      var headers = this.getHeaders();
      var result = this._http.get(url, { headers: headers })
          .map((response: Response) => response.json().value)
          //.do(data => console.log("All: " + JSON.stringify(data)))
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      return result;
  }

  getQuery(commandType:string, command:string, odataQuery: string): any {
    
      // format request url
      var url = this._urlRoot + commandType + "/" + command + "/" + odataQuery;
      console.log(url);

      // send request
      var headers = this.getHeaders();
      var result = this._http.get(url, { headers: headers })
          .map((response: Response) => response.json())
          //.do(data => console.log("All: " + JSON.stringify(data)))
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      return result;
  }

  // request headers collection
  getHeaders(): Headers {
    var headers = new Headers();
    headers.append("Authorization", "Basic U1VQOmZ1YWg3MTc1");
    headers.append("Alias", "MAIN");
    headers.append("Clinic-Code", "1");
    headers.append("Content-Type", "application/json");
    return headers;
  }
}
