import { TestBed } from '@angular/core/testing';

import { TravellerService } from './traveller.service';

describe('TravellerService', () => {
  let service: TravellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
