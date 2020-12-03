import { Component, OnInit } from '@angular/core';
import { LogRestService } from 'src/app/service/log-rest.service';
import { Candidate } from 'src/app/resources/candidate';
import { FormCandidate } from 'src/app/class/form-candidate';
import { Course } from 'src/app/resources/course';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-corsi-iscriviti',
  templateUrl: './final-corsi-iscriviti.component.html',
  styleUrls: ['./final-corsi-iscriviti.component.css']
})
export class FinalCorsiIscrivitiComponent implements OnInit {

  candidate = new FormCandidate();
  corso!: Course;
  errorFirstName = false;
  errorLastName = false;
  errorEmailAddress = false;

  constructor(private logRest: LogRestService, private router: Router) { }

  ngOnInit(): void {
    this.corso = this.logRest.corso;
  }

  annulla(event: Event):void{
    this.candidate.clear();
  }

  iscriviti(event: Event): void{
    if(this.candidate.firstName.length>=3 &&
      this.candidate.lastName.length>=3 &&
      this.candidate.emailAddress.length>=3 &&
      this.controlloEmail){
      this.logRest.postCandidate(this.candidate.firstName, this.candidate.lastName, this.candidate.emailAddress)
      .subscribe((answer) => this.iscrivitiOk(answer), (error) => this.iscrivitiKo(error));
      this.router.navigateByUrl("/corsi-grazie");
    }
    if(this.candidate.firstName.length<3 || this.candidate.firstName === undefined){
      this.candidate.firstName = "";
      this.errorFirstName = true;
    }
    if(this.candidate.lastName.length<3 || this.candidate.lastName === undefined){
      this.candidate.lastName = "";
      this.errorLastName = true;
    }
    if(this.candidate.emailAddress.length<3 || this.candidate.emailAddress === undefined || this.candidate.emailAddress.indexOf("@") === -1){
      this.candidate.emailAddress = "";
      this.errorEmailAddress = true;
    }
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
    this.errorFirstName = this.errorLastName = this.errorEmailAddress = false;
  }

  private subscriptionKo(error: HttpErrorResponse): void{
    console.error(error);
  }

  controlloEmail(email: string): boolean{
    if(this.candidate.emailAddress.indexOf("@") !== -1 &&
      (this.candidate.emailAddress.indexOf(".com")!==-1 || this.candidate.emailAddress.indexOf(".it")!==-1) &&
      this.candidate.emailAddress.indexOf(",") !== -1 &&
      this.candidate.emailAddress.indexOf(";") !== -1 &&
      this.candidate.emailAddress.indexOf("(") !== -1 &&
      this.candidate.emailAddress.indexOf(")") !== -1 &&
      this.candidate.emailAddress.indexOf("[") !== -1 &&
      this.candidate.emailAddress.indexOf("]") !== -1 &&
      this.candidate.emailAddress.indexOf("{") !== -1 &&
      this.candidate.emailAddress.indexOf("}") !== -1 &&
      this.candidate.emailAddress.indexOf("<") !== -1 &&
      this.candidate.emailAddress.indexOf(">") !== -1 &&
      this.candidate.emailAddress.indexOf("+") !== -1 &&
      this.candidate.emailAddress.indexOf("*") !== -1 &&
      this.candidate.emailAddress.indexOf(";") !== -1
      ){
      return true;
    }else{
      return false;
    }
  }

}
