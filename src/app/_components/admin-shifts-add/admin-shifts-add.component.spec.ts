import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShiftsAddComponent } from './admin-shifts-add.component';

describe('AdminShiftsAddComponent', () => {
  let component: AdminShiftsAddComponent;
  let fixture: ComponentFixture<AdminShiftsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShiftsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShiftsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
