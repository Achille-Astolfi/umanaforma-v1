import { TestBed } from '@angular/core/testing';

import { TypeLoggedAdminGuard } from './type-logged-admin.guard';

describe('TypeLoggedAdminGuard', () => {
  let guard: TypeLoggedAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TypeLoggedAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
