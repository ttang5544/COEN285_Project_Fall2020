import { TestBed } from '@angular/core/testing';

import { PublicDataFacadeService } from './public-data.facade.service';

describe('PublicDataFacadeService', () => {
  let service: PublicDataFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicDataFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
