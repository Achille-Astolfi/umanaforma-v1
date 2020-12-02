import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDashboardUserComponent } from './final-dashboard-user.component';

describe('FinalDashboardUserComponent', () => {
  let component: FinalDashboardUserComponent;
  let fixture: ComponentFixture<FinalDashboardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalDashboardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDashboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
