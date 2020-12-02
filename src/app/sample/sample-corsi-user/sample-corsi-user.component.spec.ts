import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCorsiUserComponent } from './sample-corsi-user.component';

describe('SampleCorsiUserComponent', () => {
  let component: SampleCorsiUserComponent;
  let fixture: ComponentFixture<SampleCorsiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCorsiUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCorsiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
