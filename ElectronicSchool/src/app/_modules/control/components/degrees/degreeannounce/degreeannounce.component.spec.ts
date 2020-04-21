import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeannounceComponent } from './degreeannounce.component';

describe('DegreeannounceComponent', () => {
  let component: DegreeannounceComponent;
  let fixture: ComponentFixture<DegreeannounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeannounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeannounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
