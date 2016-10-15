/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlueskyApiService } from './bluesky-api.service';

describe('Service: BlueskyApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlueskyApiService]
    });
  });

  it('should ...', inject([BlueskyApiService], (service: BlueskyApiService) => {
    expect(service).toBeTruthy();
  }));
});
