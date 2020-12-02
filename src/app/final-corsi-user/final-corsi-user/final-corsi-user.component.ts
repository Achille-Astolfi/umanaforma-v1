import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/resources/course';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-corsi-user',
  templateUrl: './final-corsi-user.component.html',
  styleUrls: ['./final-corsi-user.component.css']
})
export class FinalCorsiUserComponent implements OnInit {

  courseList = new Array<Course>();

  constructor(private logRest: LogRestService) { }

  ngOnInit(): void {
    this.logRest.getCourses()
    .subscribe((answer) => this.getCourseOk(answer), (error) => this.getCourseKo(error));
  }

  private getCourseOk(answer: Course[]):void{
    console.log("ANDATA BENE");
    this.courseList = answer;
  }

  private getCourseKo(error: HttpErrorResponse):void{
    console.error(error);
  }

}
