import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-corsi-dettaglio',
  templateUrl: './corsi-dettaglio.component.html',
  styleUrls: ['./corsi-dettaglio.component.css']
})
export class CorsiDettaglioComponent implements OnInit {

  course!: Course;
  candidateList!: Candidate[];

  constructor(private umanaRestService: UmanaRestService) { }

  ngOnInit(): void {
    this.umanaRestService.getCourseById(this.umanaRestService.currentCourseId)
    .subscribe((answer) => this.getCourseOk(answer), (error) => this.getCourseKo(error));
  }

  private getCourseOk(answer: Course): void {
    this.course = answer;
    this.umanaRestService.getCandidates()
    .subscribe((answer) => this.getCandidatesOk(answer), (error) => this.getCandidatesKo(error));
  }

  private getCourseKo(error: HttpErrorResponse): void {
    console.error(error);
  }

  private getCandidatesOk(answer: Candidate[]): void {
    this.candidateList = answer;
  }

  private getCandidatesKo(error: HttpErrorResponse): void {
    console.error(error);
  }
}
