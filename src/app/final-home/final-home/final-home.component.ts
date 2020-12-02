import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/person';
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
  constructor(private logRest: LogRestService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(event:Event){
    (window as any)["$"]('#staticBackdrop').modal('hide');
    let response = this.logRest.login(this.person.username,this.person.password);
    response.subscribe((answer)=> this.loginOk(answer), (error)=>this.loginNo(error));
  }

  private loginOk(answer:string):void{
    this.message = answer;
    if(this.person.username === "user"){
      this.router.navigateByUrl("/dashboard-user");
    }else if(this.person.username === "admin"){
      this.router.navigateByUrl("/dashboard-admin");
    }
  }

  private loginNo(error: HttpErrorResponse):void{
    console.error(error);
  }
  
}
