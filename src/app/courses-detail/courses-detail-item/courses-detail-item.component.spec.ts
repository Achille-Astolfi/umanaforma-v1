import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetailItemComponent } from './courses-detail-item.component';

describe('CoursesDetailItemComponent', () => {
  let component: CoursesDetailItemComponent;
  let fixture: ComponentFixture<CoursesDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
