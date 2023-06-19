import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSocialComponent } from './facebook-social.component';

describe('FacebookSocialComponent', () => {
  let component: FacebookSocialComponent;
  let fixture: ComponentFixture<FacebookSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookSocialComponent]
    });
    fixture = TestBed.createComponent(FacebookSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
