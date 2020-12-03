import { Component, OnInit } from '@angular/core';
import { LogRestService } from 'src/app/service/log-rest.service';
import { Candidate } from 'src/app/resources/candidate';
import { FormCandidate } from 'src/app/class/form-candidate';

@Component({
  selector: 'app-final-corsi-iscriviti',
  templateUrl: './final-corsi-iscriviti.component.html',
  styleUrls: ['./final-corsi-iscriviti.component.css']
})
export class FinalCorsiIscrivitiComponent implements OnInit {

  candidate!: FormCandidate;

  constructor(private logRest: LogRestService) { }

  ngOnInit(): void {
  }

  annulla(event: Event):void{
    this.candidate.clear();
  }

  iscriviti(event: Event): void{
    //chiamata su server rest.
    //Alert controllo nome, cognome, email
  }

}
