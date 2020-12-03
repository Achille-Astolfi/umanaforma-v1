import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCorsiDettaglioComponent } from './final-corsi-dettaglio.component';

describe('FinalCorsiDettaglioComponent', () => {
  let component: FinalCorsiDettaglioComponent;
  let fixture: ComponentFixture<FinalCorsiDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCorsiDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCorsiDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
