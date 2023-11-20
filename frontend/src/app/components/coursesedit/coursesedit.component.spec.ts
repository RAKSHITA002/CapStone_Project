import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseseditComponent } from './coursesedit.component';

describe('CourseseditComponent', () => {
  let component: CourseseditComponent;
  let fixture: ComponentFixture<CourseseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseseditComponent]
    });
    fixture = TestBed.createComponent(CourseseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
