import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-candidati-dettaglio',
  templateUrl: './candidati-dettaglio.component.html',
  styleUrls: ['./candidati-dettaglio.component.css']
})
export class CandidatiDettaglioComponent implements OnInit {

  currentCandidate!: Candidate;
  courseList!: Course[];
  course!: Course;
  courseListIscritto = [] as Course[];

  constructor(private umanaRestService: UmanaRestService) { }

  ngOnInit(): void {
    //INFO CANDIDATO
    this.umanaRestService.getCandidateById(this.umanaRestService.currentCandidateId)
    .subscribe((answer) => this.getCandidateOk(answer), (error) => this.getCandidateKo(error));
    //CORSI A CUI È ISCRITTO
    this.umanaRestService.getCourses()
    .subscribe((answer) => this.getCoursesOk(answer), (error) => this.getCoursesKo(error));    
  }

  private getCoursesOk(answer: Course[]): void {
    //scorro i corsi per vedere a quali è iscritto il candidato
    this.courseList = answer;
    this.courseList.forEach(course => {
      this.umanaRestService.getCourseById(course.id)
      .subscribe((answer) => this.getCourseByIdOk(answer), (error) => this.getCourseByIdKo(error));
    });
  }

  private getCourseByIdOk(answer: Course): void {
    //scorro le subscriptions del singolo corso per controllare se il candidato è iscritto
    this.course = answer;
    this.course.subscriptions!.forEach(subscription => {
      if(subscription.candidate.id === this.currentCandidate.id){
        this.courseListIscritto.push(this.course);
      }
    });
  }

  private getCourseByIdKo(error: HttpErrorResponse): void {
    console.error(error);
  }

  private getCoursesKo(error: HttpErrorResponse): void {
    console.error(error);
  }

  private getCandidateOk(answer: Candidate): void {
    this.currentCandidate = answer;
  }

  private getCandidateKo(error: HttpErrorResponse): void {
    console.error(error);
  }

}
