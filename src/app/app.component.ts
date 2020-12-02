import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormClass } from './application/login-form-class';
import { UmanaFormaRestServiceService } from './service/umana-forma-rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private typeUser?: string;
  private username !: string;
  private password !: string;
  utente = new LoginFormClass();

  message?: string;

  constructor(private router: Router, public umanaFormaRestService : UmanaFormaRestServiceService) { }

  displayingSample(): boolean {
    return this.router.url.startsWith("/sample");
  }

  doLogin(event: Event): void {

    if(this.utente.username === "user" && this.utente.password === "password"){
        this.loginVerified();

    } else if (this.utente.username === "admin" && this.utente.password === "password"){
        this.loginVerified();
    } else {
      console.error("Valori Errati!");
    }
    this.utente.clear();
  }

  private loginOk(answer: string): void{
    this.message = answer;
  } 

  private loginKo(error: HttpErrorResponse): void{
    console.error(error);
    /**TODO Creare messaggio di errore */
  }

  private loginVerified(): void{
    let response = this.umanaFormaRestService.login(this.utente.username, this.utente.password);
        response.subscribe((answer) => this.loginOk(answer), (error) => this.loginKo(error));
  }

  userDashboardChoise(): string {
    return "/dashboard-" + this.utente.username;
  }

}
