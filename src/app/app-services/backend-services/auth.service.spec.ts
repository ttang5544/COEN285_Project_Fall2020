import { TestBed } from '@angular/core/testing';

import { UserAuthFacadeService } from './user-auth.facade.service';

describe('AuthService', () => {
  let service: UserAuthFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
