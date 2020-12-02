import { TestBed } from '@angular/core/testing';

import { TypeLoggedUserGuard } from './type-logged-user.guard';

describe('TypeLoggedUserGuard', () => {
  let guard: TypeLoggedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TypeLoggedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
