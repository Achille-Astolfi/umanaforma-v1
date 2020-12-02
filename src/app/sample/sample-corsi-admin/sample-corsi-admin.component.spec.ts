import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCorsiAdminComponent } from './sample-corsi-admin.component';

describe('SampleCorsiAdminComponent', () => {
  let component: SampleCorsiAdminComponent;
  let fixture: ComponentFixture<SampleCorsiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCorsiAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCorsiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
