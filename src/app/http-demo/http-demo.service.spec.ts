/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpDemoService } from './http-demo.service';

describe('Service: HttpDemo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpDemoService]
    });
  });

  it('should ...', inject([HttpDemoService], (service: HttpDemoService) => {
    expect(service).toBeTruthy();
  }));
});
