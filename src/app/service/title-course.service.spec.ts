import { TestBed } from '@angular/core/testing';

import { TitleCourseService } from './title-course.service';

describe('TitleCourseService', () => {
  let service: TitleCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
