import { TestBed, inject } from '@angular/core/testing';
import { AuthLoadGuard } from './auth-load.guard';

describe('AuthLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLoadGuard]
    });
  });

  it('should ...', inject([AuthLoadGuard], (service: AuthLoadGuard) => {
    expect(service).toBeTruthy();
  }));
});
