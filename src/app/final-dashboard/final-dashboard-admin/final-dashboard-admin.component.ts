import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateTotResponse } from 'src/app/dto/candidate-tot-response';
import { Candidate } from 'src/app/resources/candidate';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-dashboard-admin',
  templateUrl: './final-dashboard-admin.component.html',
  styleUrls: ['./final-dashboard-admin.component.css']
})
export class FinalDashboardAdminComponent implements OnInit {

  constructor(private logRest: LogRestService, private router: Router) { }

  ngOnInit(): void {
  }

  doGetTotCandidate(event: Event): void{
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
    this.logRest.candidateTot = candidatesTot;
    this.router.navigateByUrl("/candidati");
  }

  private actionKo(error: HttpErrorResponse): void{
    console.error(error);
  }

}
