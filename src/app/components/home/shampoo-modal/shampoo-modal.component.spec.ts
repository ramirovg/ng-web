import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampooModalComponent } from './shampoo-modal.component';

describe('ShampooModalComponent', () => {
  let component: ShampooModalComponent;
  let fixture: ComponentFixture<ShampooModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShampooModalComponent]
    });
    fixture = TestBed.createComponent(ShampooModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
