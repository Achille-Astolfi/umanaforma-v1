import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';
import { Course } from 'src/app/resource/course';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList = new Array<Course>();

  constructor(
    private umanaFormaRestService: UmanaFormaRestServiceService
  ) { }

  ngOnInit(): void {
    this.umanaFormaRestService.getCourses().subscribe((answer) => this.getCoursesOk(answer),
      (error) => this.getCoursesKo(error));
  }

  private getCoursesOk(answer: Course[]): void {
    this.courseList = answer;
  }

  private getCoursesKo(error: HttpErrorResponse): void {
    console.error(error);
  }

  action(event: Course): void {
    this.courseList = [event];
    this.umanaFormaRestService.getCourseById(event.id)
      .subscribe((answer) => this.actionOk(answer), (error) => this.actionKo(error));
  }

  private actionKo(error: HttpErrorResponse): void {
    console.error(error);
  }

  private actionOk(answer: Course): void {
    if(answer.subscriptions === undefined) {
      return;
    }
    let candidates = new Array<Candidate>();
    for(let x of answer.subscriptions) {
      candidates.push(x.candidate);
    }
    console.log(candidates);
  }

}
