import { Component, OnInit } from '@angular/core';
import { LogRestService } from 'src/app/service/log-rest.service';
import { Candidate } from 'src/app/resources/candidate';

@Component({
  selector: 'app-final-corsi-iscriviti',
  templateUrl: './final-corsi-iscriviti.component.html',
  styleUrls: ['./final-corsi-iscriviti.component.css']
})
export class FinalCorsiIscrivitiComponent implements OnInit {

  candidate!: Candidate;

  constructor(private logRest: LogRestService) { }

  ngOnInit(): void {
  }

  annulla(event: Event):void{
    //da sistemare
    this.candidate.firstName = "";
    this.candidate.lastName = "";
    this.candidate.emailAddress = "";
  }

  iscriviti(event: Event): void{
    //chiamata su server rest.
    //Alert controllo nome, cognome, email
  }

}
