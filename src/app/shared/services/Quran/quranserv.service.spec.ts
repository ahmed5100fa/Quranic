import { TestBed } from '@angular/core/testing';

import { QuranservService } from './quranserv.service';

describe('QuranservService', () => {
  let service: QuranservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuranservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
