import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiAdminComponent } from './corsi-admin.component';

describe('CorsiAdminComponent', () => {
  let component: CorsiAdminComponent;
  let fixture: ComponentFixture<CorsiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
