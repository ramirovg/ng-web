import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappSocialComponent } from './whatsapp-social.component';

describe('WhatsappSocialComponent', () => {
  let component: WhatsappSocialComponent;
  let fixture: ComponentFixture<WhatsappSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappSocialComponent]
    });
    fixture = TestBed.createComponent(WhatsappSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
