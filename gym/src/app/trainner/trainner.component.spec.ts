import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainnerComponent } from './trainner.component';

describe('TrainnerComponent', () => {
  let component: TrainnerComponent;
  let fixture: ComponentFixture<TrainnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
