import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleheaderComponent } from './middleheader.component';

describe('MiddleheaderComponent', () => {
  let component: MiddleheaderComponent;
  let fixture: ComponentFixture<MiddleheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
