import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCommentsComponent } from './flight-comments.component';

describe('FlightCommentsComponent', () => {
  let component: FlightCommentsComponent;
  let fixture: ComponentFixture<FlightCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
