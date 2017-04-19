import { TestBed, inject } from '@angular/core/testing';
import { AuthOffGuard } from './auth-off.guard';

describe('AuthOffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthOffGuard]
    });
  });

  it('should ...', inject([AuthOffGuard], (service: AuthOffGuard) => {
    expect(service).toBeTruthy();
  }));
});
