import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCorsiIscrivitiComponent } from './final-corsi-iscriviti.component';

describe('FinalCorsiIscrivitiComponent', () => {
  let component: FinalCorsiIscrivitiComponent;
  let fixture: ComponentFixture<FinalCorsiIscrivitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCorsiIscrivitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCorsiIscrivitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
