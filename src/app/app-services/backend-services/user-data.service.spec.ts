import { TestBed } from '@angular/core/testing';

import { UserDataFacadeService } from './user-data.facade.service';

describe('UserDataService', () => {
  let service: UserDataFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
