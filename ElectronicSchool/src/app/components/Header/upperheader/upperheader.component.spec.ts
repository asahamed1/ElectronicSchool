import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperheaderComponent } from './upperheader.component';

describe('UpperheaderComponent', () => {
  let component: UpperheaderComponent;
  let fixture: ComponentFixture<UpperheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
