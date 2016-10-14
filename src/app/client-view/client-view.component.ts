import { Component, OnInit } from '@angular/core';

import { IClient } from './client';
import { ClientViewService } from './client-view.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'pm-client',
    templateUrl: './client-view.component.html',
    styleUrls: ['./client-view.component.css'],
})
export class ClientViewComponent implements OnInit {
   
    pageTitle: string = "Client List";
    //clients: Observable<IClient[]>;
    clients: IClient[];
    listFilter: string;

    constructor(private _clientService: ClientViewService) {
    }

    handleData(data : IClient[]) {
        console.log(data);
        this.clients = data;
    }

    ngOnInit() {
        this._clientService.getClients(this.listFilter).subscribe(
            data => this.handleData(data),
            err => {} );
        
        console.log('In OnInit');
    }

    onFilterChange() {
        this._clientService.getClients(this.listFilter).subscribe(
            data => this.handleData(data),
            err => {} );
        
        console.log('OnFilterChange');        
    }
    
}
