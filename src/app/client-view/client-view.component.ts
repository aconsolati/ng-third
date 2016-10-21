import { Component, OnInit } from '@angular/core';

import { IClient } from './client';
import { ClientViewService } from './client-view.service';
//import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'pm-client',
    templateUrl: './client-view.component.html',
    styleUrls: ['./client-view.component.css'],
})
export class ClientViewComponent implements OnInit {
   
    errorMessage: string;
    clients: IClient[];
    listFilter: string;

    constructor(private _clientService: ClientViewService) {}

    ngOnInit() {
        this.getClients();             
    }

    onFilterChange() {
        this.getClients();
    }
    
    getClients() {
        this._clientService.getClients(this.listFilter).subscribe(
            clients => { this.clients = clients; 
                console.log(clients);},
            error => this.errorMessage = <any>error ); 
    }
}
