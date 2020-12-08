import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/resource/candidate';
import { Course } from 'src/app/resource/course';
import { CourseCandidates } from 'src/app/resource/course-candidates';
import { TitleCourseService } from 'src/app/service/title-course.service';
import { TitleService } from 'src/app/service/title.service';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-candidate-course-subscribed',
  templateUrl: './candidate-course-subscribed.component.html',
  styleUrls: ['./candidate-course-subscribed.component.css']
})
export class CandidateCourseSubscribedComponent implements OnInit {
  courseList = new Array<Course>();
  candidateCourseList = new Array<Course>();
  coursesIdList = new Array<number>();

  constructor(
    private titleService: TitleService,
    private umanaFormaRestService: UmanaFormaRestServiceService,
    private router: Router,
    public titleCourse: TitleCourseService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Candidate Courses");
    this.umanaFormaRestService.getCourses().subscribe((answer) => this.getCoursesOk(answer),
      (error) => this.getCoursesKo(error));
  }

  private getCoursesOk(answer: Course[]): void {
    this.courseList = answer;
    if (answer !== undefined) {
      for (let elem of answer) {
        this.coursesIdList.push(elem.id);
      }
    }
    for (let id of this.coursesIdList) {
      if (id !== 0) {
        this.umanaFormaRestService.getCourseById(id)
          .subscribe((answer) => this.getCoursesByIdOk(answer), (error) => this.getCoursesByIdKo(error));
      }
    }
  }

  private getCoursesByIdOk(answer: Course): void {
    if (answer.subscriptions !== undefined) {
      for (let elem of answer.subscriptions) {
        if (elem.candidate.id === this.titleCourse.idCandidate) {
          this.candidateCourseList.push(answer);
        }
      }
    }
  }

  private getCoursesByIdKo(error: HttpErrorResponse): void {
  console.error(error);
  }

  private getCoursesKo(error: HttpErrorResponse): void {
  //console.error(error);
  switch(error.status) {
    case 504:
      this.router.navigateByUrl("/gateway-timeout");
      break;
    case 404:  this.router.navigateByUrl("/not-found"); 
      break;
    default:
      this.router.navigateByUrl("/forbidden"); 
      break;
  }
  }
}
