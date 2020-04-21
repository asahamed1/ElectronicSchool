import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlesmalldeaderComponent } from './middlesmalldeader.component';

describe('MiddlesmalldeaderComponent', () => {
  let component: MiddlesmalldeaderComponent;
  let fixture: ComponentFixture<MiddlesmalldeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlesmalldeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlesmalldeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
