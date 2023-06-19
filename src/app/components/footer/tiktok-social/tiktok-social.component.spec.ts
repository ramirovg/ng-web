import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokSocialComponent } from './tiktok-social.component';

describe('TiktokSocialComponent', () => {
  let component: TiktokSocialComponent;
  let fixture: ComponentFixture<TiktokSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiktokSocialComponent]
    });
    fixture = TestBed.createComponent(TiktokSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
