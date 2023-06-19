import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcondModalComponent } from './acond-modal.component';

describe('AcondModalComponent', () => {
  let component: AcondModalComponent;
  let fixture: ComponentFixture<AcondModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcondModalComponent]
    });
    fixture = TestBed.createComponent(AcondModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
