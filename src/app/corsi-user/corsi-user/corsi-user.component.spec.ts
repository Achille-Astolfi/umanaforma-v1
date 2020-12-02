import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiUserComponent } from './corsi-user.component';

describe('CorsiUserComponent', () => {
  let component: CorsiUserComponent;
  let fixture: ComponentFixture<CorsiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
