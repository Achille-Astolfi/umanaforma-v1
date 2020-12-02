import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDashboardAdminComponent } from './final-dashboard-admin.component';

describe('FinalDashboardAdminComponent', () => {
  let component: FinalDashboardAdminComponent;
  let fixture: ComponentFixture<FinalDashboardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalDashboardAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
