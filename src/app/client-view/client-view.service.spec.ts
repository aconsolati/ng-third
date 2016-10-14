/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientViewService } from './client-view.service';

describe('Service: ClientView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientViewService]
    });
  });

  it('should ...', inject([ClientViewService], (service: ClientViewService) => {
    expect(service).toBeTruthy();
  }));
});
