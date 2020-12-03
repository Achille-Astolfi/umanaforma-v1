import { Component, OnInit } from '@angular/core';
import { LogRestService } from 'src/app/service/log-rest.service';
import { Candidate } from 'src/app/resources/candidate';
import { FormCandidate } from 'src/app/class/form-candidate';
import { Course } from 'src/app/resources/course';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-final-corsi-iscriviti',
  templateUrl: './final-corsi-iscriviti.component.html',
  styleUrls: ['./final-corsi-iscriviti.component.css']
})
export class FinalCorsiIscrivitiComponent implements OnInit {

  candidate = new FormCandidate();

  corso!: Course;

  constructor(private logRest: LogRestService) { }

  ngOnInit(): void {
    this.corso = this.logRest.corso;
  }

  annulla(event: Event):void{
    this.candidate.clear();
  }

  iscriviti(event: Event): void{
    this.logRest.postCandidate(this.candidate.firstName, this.candidate.lastName, this.candidate.emailAddress)
    .subscribe((answer) => this.iscrivitiOk(answer), (error) => this.iscrivitiKo(error));
  }

  private iscrivitiOk(answer: string): void{
    //answer è l id del candidato
    console.log("IscrivitiOk");
    this.logRest.postSubscription(this.corso.id, +answer)//il + lo trasforma in number
    .subscribe((answer) => this.subscriptionOk(answer), (error) => this.subscriptionKo(error));
  }

  private iscrivitiKo(error: HttpErrorResponse): void{
    console.error(error);
  }

  private subscriptionOk(answer: string): void{
    console.log("SUBSCRIPTION Ok");
  }

  private subscriptionKo(error: HttpErrorResponse): void{
    console.error(error);
  }

}
