import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpDemoService {

  constructor(private http : Http) { }

  getAll(): any[] {
    return [] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70, profession: ''},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100, profession: ''},
      {id: 3, name: 'Han Solo', height: 185, weight: 85, profession: ''},
    ];
  }

}
