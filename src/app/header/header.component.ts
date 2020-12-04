import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../class/person';
import { LogRestService } from '../service/log-rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  person = new Person();
  message!: string;
  error = false;

  constructor(public logRest: LogRestService, private router: Router) { }

  ngOnInit(): void {
    
  }

  checkRole(): string | undefined{
    return this.logRest.username;
  }

  doLogin(event:Event){
    let response = this.logRest.login(this.person.username,this.person.password);
    response.subscribe((answer)=> this.loginOk(answer), (error)=>this.loginNo(error));
  }

  private loginOk(answer:string):void{
    this.error = false;
    this.message = answer;
    (window as any)["$"]('#staticBackdrop').modal('hide');
    console.log("ciao");
    if(this.person.username === "user"){
      this.router.navigateByUrl("/dashboard-user");
      console.log("ciao");
    }else if(this.person.username === "admin"){
      console.log("ciao");
      this.router.navigateByUrl("/dashboard-admin");
    }
    this.person.username = "";
    this.person.password = "";
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

  onLogout(event:Event):void{
    this.logRest.logout()
        .subscribe((answer)=>this.onLogoutOk(answer), (error) => this.onLogoutKo(error));
  }

  private onLogoutOk(answer: string): void{
    this.message = answer;
    this.router.navigateByUrl("/home");
  }

  private onLogoutKo(error: HttpErrorResponse): void{
    console.error(error);
  }

  annulla(event: Event): void{
    this.person.username = "";
    this.person.password = "";
  }

}
