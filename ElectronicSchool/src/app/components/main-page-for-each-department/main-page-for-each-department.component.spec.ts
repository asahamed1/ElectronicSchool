import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageForEachDepartmentComponent } from './main-page-for-each-department.component';

describe('MainPageForEachDepartmentComponent', () => {
  let component: MainPageForEachDepartmentComponent;
  let fixture: ComponentFixture<MainPageForEachDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageForEachDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageForEachDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
