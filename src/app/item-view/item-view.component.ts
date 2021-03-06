import { Component, OnInit } from '@angular/core';

import { IItem } from './item';
import { ItemViewService } from './item-view.service';

@Component({
    selector: 'pm-item',
    templateUrl: './item-view.component.html',
    styleUrls: ['./item-view.component.css'],
})
export class ItemViewComponent implements OnInit {
   
    errorMessage: string;
    items: IItem[];
    listFilter: string = "Insulin";
    nowLoading: boolean;

    constructor(private _itemService: ItemViewService) {}

    ngOnInit() {
        this.getItems();
        this.nowLoading = true;
        console.log(this.items);
        console.log(this.nowLoading);
    }

    onFilterChange() {
        this.getItems();
        console.log(this.items);
    }
    
    getItems() {
        this.nowLoading = true;
        this._itemService.getItems(this.listFilter).subscribe(
            item => { this.items = item; 
                console.log(item);
                this.nowLoading = false; },
            error => {this.errorMessage = <any>error;
                this.nowLoading = false;} ); 
    }
}
