import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resources/candidate';
import { Course } from 'src/app/resources/course';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-corsi-dettaglio',
  templateUrl: './final-corsi-dettaglio.component.html',
  styleUrls: ['./final-corsi-dettaglio.component.css']
})
export class FinalCorsiDettaglioComponent implements OnInit {

  corso!: Course;
  candidateList = new Array<Candidate>();

  constructor(private logRest: LogRestService) { }

  ngOnInit(): void {
    this.corso = this.logRest.corso;
    this.candidateList = this.logRest.candidate;
  }

}
