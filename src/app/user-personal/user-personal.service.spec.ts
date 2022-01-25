import { TestBed } from '@angular/core/testing';

import { UserPersonalService } from './user-personal.service';

describe('UserPersonalService', () => {
  let service: UserPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
