import { TestBed } from '@angular/core/testing';

import { MagicRequestService } from './magic-request.service';

describe('MagicRequestService', () => {
  let service: MagicRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
