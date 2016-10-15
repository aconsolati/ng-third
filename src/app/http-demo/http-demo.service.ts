import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpDemoService {

  //private _url = 'http://devplaybox.rxworks.com/rxapi/odata/Clients?$top=2';

  constructor() { }

  getAll(): any[] {
    return [] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70, profession: ''},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100, profession: ''},
      {id: 3, name: 'Han Solo', height: 185, weight: 85, profession: ''},
    ];
  }

}
