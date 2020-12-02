import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCorsiUserComponent } from './final-corsi-user.component';

describe('FinalCorsiUserComponent', () => {
  let component: FinalCorsiUserComponent;
  let fixture: ComponentFixture<FinalCorsiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCorsiUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCorsiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
