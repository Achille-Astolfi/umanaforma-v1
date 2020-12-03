import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCorsiAdminComponent } from './final-corsi-admin.component';

describe('FinalCorsiAdminComponent', () => {
  let component: FinalCorsiAdminComponent;
  let fixture: ComponentFixture<FinalCorsiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCorsiAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCorsiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
