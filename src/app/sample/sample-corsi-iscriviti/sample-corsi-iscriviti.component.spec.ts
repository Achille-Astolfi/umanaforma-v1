import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCorsiIscrivitiComponent } from './sample-corsi-iscriviti.component';

describe('SampleCorsiIscrivitiComponent', () => {
  let component: SampleCorsiIscrivitiComponent;
  let fixture: ComponentFixture<SampleCorsiIscrivitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCorsiIscrivitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCorsiIscrivitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
