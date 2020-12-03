import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatiItemComponent } from './candidati-item.component';

describe('CandidatiItemComponent', () => {
  let component: CandidatiItemComponent;
  let fixture: ComponentFixture<CandidatiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatiItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
