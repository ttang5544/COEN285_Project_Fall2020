import { TestBed } from '@angular/core/testing';

import { ItemDataFacadeService } from './item-data.facade.service';

describe('ItemDataService', () => {
  let service: ItemDataFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDataFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
