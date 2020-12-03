import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCorsiGrazieComponent } from './final-corsi-grazie.component';

describe('FinalCorsiGrazieComponent', () => {
  let component: FinalCorsiGrazieComponent;
  let fixture: ComponentFixture<FinalCorsiGrazieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCorsiGrazieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCorsiGrazieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
