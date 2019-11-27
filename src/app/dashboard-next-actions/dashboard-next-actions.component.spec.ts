import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNextActionsComponent } from './dashboard-next-actions.component';

describe('DashboardNextActionsComponent', () => {
  let component: DashboardNextActionsComponent;
  let fixture: ComponentFixture<DashboardNextActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNextActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNextActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
