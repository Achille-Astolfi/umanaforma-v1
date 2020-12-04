import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatiDettaglioComponent } from './candidati-dettaglio.component';

describe('CandidatiDettaglioComponent', () => {
  let component: CandidatiDettaglioComponent;
  let fixture: ComponentFixture<CandidatiDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatiDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatiDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
