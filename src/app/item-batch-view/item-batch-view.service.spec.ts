/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemBatchViewService } from './item-batch-view.service';

describe('Service: ItemView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemBatchViewService]
    });
  });

  it('should ...', inject([ItemBatchViewService], (service: ItemBatchViewService) => {
    expect(service).toBeTruthy();
  }));
});
