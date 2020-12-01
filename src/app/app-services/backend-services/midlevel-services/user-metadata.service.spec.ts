import { TestBed } from '@angular/core/testing';

import { UserMetadataService } from './user-metadata.service-facade';

describe('UserMetadataService', () => {
  let service: UserMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
