import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiAdminItemComponent } from './corsi-admin-item.component';

describe('CorsiAdminItemComponent', () => {
  let component: CorsiAdminItemComponent;
  let fixture: ComponentFixture<CorsiAdminItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiAdminItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiAdminItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
