import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/resource/candidate';
import { Course } from 'src/app/resource/course';
import { TitleService } from 'src/app/service/title.service';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList = new Array<Course>();

  constructor(
    private router: Router,
    private umanaFormaRestService: UmanaFormaRestServiceService,
    private titleService:TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Course List");
    this.umanaFormaRestService.getCourses().subscribe((answer) => this.getCoursesOk(answer),
      (error) => this.getCoursesKo(error));
  }

  private getCoursesOk(answer: Course[]): void {
    this.courseList = answer;
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

  action(event: Course): void {
    this.courseList = [event];
    this.umanaFormaRestService.getCourseById(event.id)
      .subscribe((answer) => this.actionOk(answer), (error) => this.actionKo(error));
  }

  private actionKo(error: HttpErrorResponse): void {
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
