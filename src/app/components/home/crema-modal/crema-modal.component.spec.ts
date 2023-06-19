import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremaModalComponent } from './crema-modal.component';

describe('CremaModalComponent', () => {
  let component: CremaModalComponent;
  let fixture: ComponentFixture<CremaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CremaModalComponent]
    });
    fixture = TestBed.createComponent(CremaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
