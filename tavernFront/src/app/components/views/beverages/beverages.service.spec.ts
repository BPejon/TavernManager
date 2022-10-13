import { TestBed } from '@angular/core/testing';

import { BeveragesService } from './beverages.service';

describe('BeveragesService', () => {
  let service: BeveragesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeveragesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
