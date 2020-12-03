import { TestBed } from '@angular/core/testing';

import { LowlevelAuthService } from './lowlevel-auth.service';

describe('LowlevelAuthService', () => {
  let service: LowlevelAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LowlevelAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
