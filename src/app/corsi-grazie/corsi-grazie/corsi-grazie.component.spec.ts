import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiGrazieComponent } from './corsi-grazie.component';

describe('CorsiGrazieComponent', () => {
  let component: CorsiGrazieComponent;
  let fixture: ComponentFixture<CorsiGrazieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiGrazieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiGrazieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
