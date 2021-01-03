import { TestBed } from '@angular/core/testing';

import { CasesResolverGuard } from './cases-resolver.guard';

describe('CasesResolverGuard', () => {
  let guard: CasesResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CasesResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
