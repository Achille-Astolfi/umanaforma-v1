import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatiDettaglioItemComponent } from './candidati-dettaglio-item.component';

describe('CandidatiDettaglioItemComponent', () => {
  let component: CandidatiDettaglioItemComponent;
  let fixture: ComponentFixture<CandidatiDettaglioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatiDettaglioItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatiDettaglioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
