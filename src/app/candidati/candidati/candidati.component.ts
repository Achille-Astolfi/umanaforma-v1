import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-candidati',
  templateUrl: './candidati.component.html',
  styleUrls: ['./candidati.component.css']
})
export class CandidatiComponent implements OnInit {

  elencoCandidate!: Candidate[];

  constructor(private umanaRestService: UmanaRestService) { }

  ngOnInit(): void {
    this.umanaRestService.getElencoCandidati()
    .subscribe((answer) => this.getElencoCandidateOk(answer), (error) => this.getElencoCandidateKo(error));
  }

  private getElencoCandidateOk(answer: Candidate[]): void {
    this.elencoCandidate = answer;
  }

  private getElencoCandidateKo(error: HttpErrorResponse): void {
    console.error(error);
  }

}
