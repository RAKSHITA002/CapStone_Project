import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouresaddComponent } from './couresadd.component';

describe('CouresaddComponent', () => {
  let component: CouresaddComponent;
  let fixture: ComponentFixture<CouresaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouresaddComponent]
    });
    fixture = TestBed.createComponent(CouresaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
