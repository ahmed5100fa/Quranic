import { TestBed } from '@angular/core/testing';

import { TafseerService } from './tafseer.service';

describe('TafseerService', () => {
  let service: TafseerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TafseerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
