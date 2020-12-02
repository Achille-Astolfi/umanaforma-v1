import { TestBed } from '@angular/core/testing';

import { LogRestService } from './log-rest.service';

describe('LogRestService', () => {
  let service: LogRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
