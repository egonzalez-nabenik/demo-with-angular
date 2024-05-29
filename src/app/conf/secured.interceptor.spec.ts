import { TestBed } from '@angular/core/testing';

import { SecuredInterceptor } from './secured.interceptor';

describe('SecuredInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SecuredInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SecuredInterceptor = TestBed.inject(SecuredInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
