import { TestBed } from '@angular/core/testing';

import { PrayingTimeService } from './praying-time.service';

describe('PrayingTimeService', () => {
  let service: PrayingTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrayingTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
