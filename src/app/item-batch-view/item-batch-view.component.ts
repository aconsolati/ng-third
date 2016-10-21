import { Component, OnInit } from '@angular/core';

import { IItemStockBatchOnHandInfo } from './item-batch';
import { ItemBatchViewService } from './item-batch-view.service';

@Component({
    selector: 'pm-item',
    templateUrl: './item-batch-view.component.html',
    styleUrls: ['./item-batch-view.component.css'],
})
export class ItemBatchViewComponent implements OnInit {
   
    errorMessage: string;
    itemBatches: IItemStockBatchOnHandInfo[];
    listFilter: string;

    constructor(private _itemService: ItemBatchViewService) {}

    ngOnInit() {
        this.getItemBatches();
        console.log(this.itemBatches);
    }

    onFilterChange() {
        this.getItemBatches();
        console.log(this.itemBatches);
    }
    
    getItemBatches() {
        this._itemService.getItemBatches(this.listFilter).subscribe(
            itemBatch => { this.itemBatches = itemBatch; 
                console.log(itemBatch); },
            error => this.errorMessage = <any>error ); 
    }
}
