import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCandidatiComponent } from './final-candidati.component';

describe('FinalCandidatiComponent', () => {
  let component: FinalCandidatiComponent;
  let fixture: ComponentFixture<FinalCandidatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCandidatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCandidatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
