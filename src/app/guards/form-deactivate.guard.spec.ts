import { TestBed } from '@angular/core/testing';

import { FormDeactivateGuard } from './form-deactivate.guard';

describe('FormDeactivateGuard', () => {
  let guard: FormDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
