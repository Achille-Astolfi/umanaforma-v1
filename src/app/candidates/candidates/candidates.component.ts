import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidateList = new Array<Candidate>();

  constructor(
    private umanaFormaRestService : UmanaFormaRestServiceService
  ) { }

  ngOnInit(): void {
    this.umanaFormaRestService.getCandidates()
    .subscribe((answer) => this.getCandidatesOk(answer), (error) => this.getCandidatesKo(error));
  }

  private getCandidatesOk(answer: Candidate[]): void {
    this.candidateList = answer;
  }

  private getCandidatesKo(error: HttpErrorResponse): void {
    console.error(error);
  }

}
