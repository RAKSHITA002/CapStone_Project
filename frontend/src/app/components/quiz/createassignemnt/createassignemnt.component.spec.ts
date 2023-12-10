import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateassignemntComponent } from './createassignemnt.component';

describe('CreateassignemntComponent', () => {
  let component: CreateassignemntComponent;
  let fixture: ComponentFixture<CreateassignemntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateassignemntComponent]
    });
    fixture = TestBed.createComponent(CreateassignemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
