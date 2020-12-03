import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/resources/candidate';
import { Course } from 'src/app/resources/course';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-corsi-admin',
  templateUrl: './final-corsi-admin.component.html',
  styleUrls: ['./final-corsi-admin.component.css']
})
export class FinalCorsiAdminComponent implements OnInit {

  courseList = new Array<Course>();
  
  constructor(private logRest: LogRestService, private router: Router) { }

  ngOnInit(): void {
    this.logRest.getCourses()
    .subscribe((answer) => this.getCourseOk(answer), (error) => this.getCourseKo(error));
  }

  private getCourseOk(answer: Course[]):void{
    this.courseList = answer;
  }

  private getCourseKo(error: HttpErrorResponse):void{
    console.error(error);
  }

  getCandidate(event: Event, course: Course): void{
    this.logRest.corso = course;
    console.log("Siamo nel corso " + course.id);
    this.logRest.getCourseById(course.id)
        .subscribe((answer)=>this.actionOk(answer), (error) => this.actionKo(error));
  }

  private actionOk(answer:Course):void{
    if(answer.subscriptions === undefined){
      return;
    }
    let candidates = new Array<Candidate>();
    for(let x of answer.subscriptions){
      candidates.push(x.candidate);
    }
    console.log(candidates);
    this.logRest.candidate = candidates;
    this.router.navigateByUrl("/corsi-dettaglio");
  }

  private actionKo(error: HttpErrorResponse): void{
    console.error(error);
  }

}
