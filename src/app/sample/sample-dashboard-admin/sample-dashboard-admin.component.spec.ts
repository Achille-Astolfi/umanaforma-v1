import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDashboardAdminComponent } from './sample-dashboard-admin.component';

describe('SampleDashboardAdminComponent', () => {
  let component: SampleDashboardAdminComponent;
  let fixture: ComponentFixture<SampleDashboardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDashboardAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
