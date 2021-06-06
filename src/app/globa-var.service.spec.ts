import { TestBed } from '@angular/core/testing';

import { GlobaVarService } from './globa-var.service';

describe('GlobaVarService', () => {
  let service: GlobaVarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobaVarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
