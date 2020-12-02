import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiIscrivitiComponent } from './corsi-iscriviti.component';

describe('CorsiIscrivitiComponent', () => {
  let component: CorsiIscrivitiComponent;
  let fixture: ComponentFixture<CorsiIscrivitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiIscrivitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiIscrivitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
