import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/resource/candidate';
import { TitleService } from 'src/app/service/title.service';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidateList = new Array<Candidate>();

  constructor(
    private router: Router,
    private umanaFormaRestService : UmanaFormaRestServiceService,
    private titleService:TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Candidates List");
    this.umanaFormaRestService.getCandidates()
    .subscribe((answer) => this.getCandidatesOk(answer), (error) => this.getCandidatesKo(error));
  }

  private getCandidatesOk(answer: Candidate[]): void {
    this.candidateList = answer;
  }

  private getCandidatesKo(error: HttpErrorResponse): void {
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

}
