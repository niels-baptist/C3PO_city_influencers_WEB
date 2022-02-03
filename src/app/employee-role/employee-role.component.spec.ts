import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoleComponent } from './employee-role.component';

describe('EmployeeRoleComponent', () => {
  let component: EmployeeRoleComponent;
  let fixture: ComponentFixture<EmployeeRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
