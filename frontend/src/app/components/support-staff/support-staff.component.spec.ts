import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportStaffComponent } from './support-staff.component';

describe('SupportStaffComponent', () => {
  let component: SupportStaffComponent;
  let fixture: ComponentFixture<SupportStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportStaffComponent]
    });
    fixture = TestBed.createComponent(SupportStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
