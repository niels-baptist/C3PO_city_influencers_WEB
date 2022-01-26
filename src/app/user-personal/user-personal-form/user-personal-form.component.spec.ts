import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalFormComponentComponent } from './user-personal-form.component';

describe('UserPersonalFormComponentComponent', () => {
  let component: UserPersonalFormComponentComponent;
  let fixture: ComponentFixture<UserPersonalFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPersonalFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonalFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
