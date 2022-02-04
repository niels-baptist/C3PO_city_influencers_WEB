import { TestBed } from '@angular/core/testing';

import { EmployeeRolesService } from './employee-roles.service';

describe('EmployeeRolesService', () => {
  let service: EmployeeRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
