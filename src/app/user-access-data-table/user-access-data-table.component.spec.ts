import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessDataTableComponent } from './user-access-data-table.component';

describe('UserAccessDataTableComponent', () => {
  let component: UserAccessDataTableComponent;
  let fixture: ComponentFixture<UserAccessDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccessDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccessDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
