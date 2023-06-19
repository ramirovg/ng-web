import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramSocialComponent } from './instagram-social.component';

describe('InstagramSocialComponent', () => {
  let component: InstagramSocialComponent;
  let fixture: ComponentFixture<InstagramSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramSocialComponent]
    });
    fixture = TestBed.createComponent(InstagramSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
