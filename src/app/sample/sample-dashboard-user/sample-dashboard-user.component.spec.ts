import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDashboardUserComponent } from './sample-dashboard-user.component';

describe('SampleDashboardUserComponent', () => {
  let component: SampleDashboardUserComponent;
  let fixture: ComponentFixture<SampleDashboardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDashboardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDashboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
