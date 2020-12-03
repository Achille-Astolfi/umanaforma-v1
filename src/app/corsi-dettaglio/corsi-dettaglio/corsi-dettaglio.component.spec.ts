import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiDettaglioComponent } from './corsi-dettaglio.component';

describe('CorsiDettaglioComponent', () => {
  let component: CorsiDettaglioComponent;
  let fixture: ComponentFixture<CorsiDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
