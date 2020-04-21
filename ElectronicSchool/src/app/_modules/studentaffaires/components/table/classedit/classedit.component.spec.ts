import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseditComponent } from './classedit.component';

describe('ClasseditComponent', () => {
  let component: ClasseditComponent;
  let fixture: ComponentFixture<ClasseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
