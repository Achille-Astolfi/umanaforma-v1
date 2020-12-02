import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCandidatiComponent } from './sample-candidati.component';

describe('SampleCandidatiComponent', () => {
  let component: SampleCandidatiComponent;
  let fixture: ComponentFixture<SampleCandidatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCandidatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCandidatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
