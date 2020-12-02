import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiUserItemComponent } from './corsi-user-item.component';

describe('CorsiUserItemComponent', () => {
  let component: CorsiUserItemComponent;
  let fixture: ComponentFixture<CorsiUserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiUserItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
