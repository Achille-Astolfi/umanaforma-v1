import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCorsiDettaglioComponent } from './sample-corsi-dettaglio.component';

describe('SampleCorsiDettaglioComponent', () => {
  let component: SampleCorsiDettaglioComponent;
  let fixture: ComponentFixture<SampleCorsiDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCorsiDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCorsiDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
