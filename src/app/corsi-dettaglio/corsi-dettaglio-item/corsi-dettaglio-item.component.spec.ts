import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiDettaglioItemComponent } from './corsi-dettaglio-item.component';

describe('CorsiDettaglioItemComponent', () => {
  let component: CorsiDettaglioItemComponent;
  let fixture: ComponentFixture<CorsiDettaglioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiDettaglioItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiDettaglioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
