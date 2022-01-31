import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerPostComponent } from './influencer-post.component';

describe('InfluencerPostComponent', () => {
  let component: InfluencerPostComponent;
  let fixture: ComponentFixture<InfluencerPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
