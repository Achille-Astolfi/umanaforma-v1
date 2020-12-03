import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatiComponent } from './candidati.component';

describe('CandidatiComponent', () => {
  let component: CandidatiComponent;
  let fixture: ComponentFixture<CandidatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
