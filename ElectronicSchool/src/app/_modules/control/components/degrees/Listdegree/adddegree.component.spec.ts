import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddegreeComponent } from './adddegree.component';

describe('AdddegreeComponent', () => {
  let component: AdddegreeComponent;
  let fixture: ComponentFixture<AdddegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
