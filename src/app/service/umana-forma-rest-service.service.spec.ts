import { TestBed } from '@angular/core/testing';

import { UmanaFormaRestServiceService } from './umana-forma-rest-service.service';

describe('UmanaFormaRestServiceService', () => {
  let service: UmanaFormaRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmanaFormaRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
