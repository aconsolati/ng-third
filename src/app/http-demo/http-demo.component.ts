import { Component, OnInit } from '@angular/core';
import { HttpDemoService } from './http-demo.service'

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  items: any[];

  constructor(private _httpService : HttpDemoService) { }

  ngOnInit() {
    this.items = this._httpService.getAll();
  }

}
