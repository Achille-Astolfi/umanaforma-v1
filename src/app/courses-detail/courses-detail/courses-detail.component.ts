import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesResponse } from 'src/app/dto/courses-response';
import { Candidate } from 'src/app/resource/candidate';
import { Course } from 'src/app/resource/course';
import { TitleCourseService } from 'src/app/service/title-course.service';
import { TitleService } from 'src/app/service/title.service';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  candidateList = new Array<Candidate>();

  constructor(
    public titleCourse: TitleCourseService,
    public umanaFormaRestService : UmanaFormaRestServiceService,
    private titleService:TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Course Detail");
    this.umanaFormaRestService.getCourseById(this.titleCourse.idCourse)
    .subscribe((answer) => this.getCoursesByIdOk(answer), (error) => this.getCoursesByIdKo(error));
  }

  private getCoursesByIdOk(answer: Course): void {
    if(answer.subscriptions !== undefined) {
      for(let i = 0; i < answer.subscriptions.length; i++) {
        this.candidateList.push(answer.subscriptions[i].candidate);
      }
    }    
  }

  private getCoursesByIdKo(error: HttpErrorResponse): void {
    console.error(error);
  }
}
