import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaPlatformComponent } from './social-media-platform.component';

describe('SocialMediaPlatformComponent', () => {
  let component: SocialMediaPlatformComponent;
  let fixture: ComponentFixture<SocialMediaPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
