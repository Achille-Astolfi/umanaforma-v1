import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateTotResponse } from 'src/app/dto/candidate-tot-response';
import { Candidate } from 'src/app/resources/candidate';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-candidati',
  templateUrl: './final-candidati.component.html',
  styleUrls: ['./final-candidati.component.css']
})
export class FinalCandidatiComponent implements OnInit {

  candidateListTot = new Array<Candidate>();

  constructor(private logRest: LogRestService, private router: Router) { }

  ngOnInit(): void {
    this.candidateListTot = this.logRest.candidateTot;
  }
}
