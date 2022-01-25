import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalComponent } from './user-personal.component';

describe('UserPersonalComponent', () => {
  let component: UserPersonalComponent;
  let fixture: ComponentFixture<UserPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
