import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateTotResponse } from 'src/app/dto/candidate-tot-response';
import { Candidate } from 'src/app/resources/candidate';
import { Course } from 'src/app/resources/course';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-candidati',
  templateUrl: './final-candidati.component.html',
  styleUrls: ['./final-candidati.component.css']
})
export class FinalCandidatiComponent implements OnInit {

  candidateListTot = new Array<Candidate>();
  courseList!: Course[];

  prova!: Course[];

  constructor(private logRest: LogRestService, private router: Router) { }

  ngOnInit(): void {
    
    this.logRest.getTotCandidate()
        .subscribe((answer) => this.actionOk(answer), (error) => this.actionKo(error));
  }

  private actionOk(answer:CandidateTotResponse):void{
    if(answer._embedded.candidates === undefined){
      return;
    }
    let candidatesTot = new Array<Candidate>();
    for(let x of answer._embedded.candidates){
      candidatesTot.push(x);
    }
    console.log(candidatesTot);
    this.candidateListTot = candidatesTot;
    this.router.navigateByUrl("/candidati");
  }

  private actionKo(error: HttpErrorResponse): void{
    console.error(error);
  }

  viewCourses(event: Event, candidate: Candidate): void{
    this.logRest.getCourses()
    .subscribe((answer) => this.getCourseOk(answer, candidate), (error) => this.getCourseKo(error));

  }

  private getCourseOk(answer: Course[], candidate: Candidate):void{
    this.courseList = answer;
    for(let element of this.courseList){
      for(let s of element.subscriptions){
        if(s.id === candidate.id){
          this.prova.push(element);
        }
      }
    }
    console.log(this.prova);
  }

  private getCourseKo(error: HttpErrorResponse):void{
    console.error(error);
  }


  
}
