import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCorsiGrazieComponent } from './sample-corsi-grazie.component';

describe('SampleCorsiGrazieComponent', () => {
  let component: SampleCorsiGrazieComponent;
  let fixture: ComponentFixture<SampleCorsiGrazieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCorsiGrazieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCorsiGrazieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
