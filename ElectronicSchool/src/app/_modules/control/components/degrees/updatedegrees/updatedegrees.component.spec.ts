import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedegreesComponent } from './updatedegrees.component';

describe('UpdatedegreesComponent', () => {
  let component: UpdatedegreesComponent;
  let fixture: ComponentFixture<UpdatedegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
