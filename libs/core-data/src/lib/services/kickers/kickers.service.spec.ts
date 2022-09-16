import { TestBed } from '@angular/core/testing';

import { KickersService } from './kickers.service';

describe('KickersService', () => {
  let service: KickersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KickersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
