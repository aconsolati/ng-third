/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemViewService } from './item-view.service';

describe('Service: ItemView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemViewService]
    });
  });

  it('should ...', inject([ItemViewService], (service: ItemViewService) => {
    expect(service).toBeTruthy();
  }));
});
