import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCourseSubscribedComponent } from './candidate-course-subscribed.component';

describe('CandidateCourseSubscribedComponent', () => {
  let component: CandidateCourseSubscribedComponent;
  let fixture: ComponentFixture<CandidateCourseSubscribedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateCourseSubscribedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCourseSubscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
