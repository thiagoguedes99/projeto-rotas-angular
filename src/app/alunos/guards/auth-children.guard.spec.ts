import { TestBed, inject } from '@angular/core/testing';
import { AuthChildrenGuard } from './auth-children.guard';

describe('AuthChildrenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthChildrenGuard]
    });
  });

  it('should ...', inject([AuthChildrenGuard], (service: AuthChildrenGuard) => {
    expect(service).toBeTruthy();
  }));
});
