import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/class/person';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-home',
  templateUrl: './final-home.component.html',
  styleUrls: ['./final-home.component.css']
})
export class FinalHomeComponent implements OnInit {

  message!: string;
  userAdmin!: boolean;
  person = new Person();
  error = false;

  constructor(private logRest: LogRestService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(event:Event){
    let response = this.logRest.login(this.person.username,this.person.password);
    response.subscribe((answer)=> this.loginOk(answer), (error)=>this.loginNo(error));
  }

  private loginOk(answer:string):void{
    this.error = false;
    this.message = answer;
    (window as any)["$"]('#staticBackdrop').modal('hide');
    if(this.person.username === "user"){
      this.router.navigateByUrl("/dashboard-user");
    }else if(this.person.username === "admin"){
      this.router.navigateByUrl("/dashboard-admin");
    }
  }

  private loginNo(error: HttpErrorResponse): void{
    this.error=true;
    this.person.username = "";
    this.person.password = "";
    console.error(error);
    setTimeout(() => {
      this.error=false;
    }, 5000);
  }

  annulla(event: Event): void{
    this.person.username = "";
    this.person.password = "";
  }
}
