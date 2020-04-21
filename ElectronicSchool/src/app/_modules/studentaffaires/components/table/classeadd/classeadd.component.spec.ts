import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseaddComponent } from './classeadd.component';

describe('ClasseaddComponent', () => {
  let component: ClasseaddComponent;
  let fixture: ComponentFixture<ClasseaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
