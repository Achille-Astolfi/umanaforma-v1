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

  constructor(private router: Router, public umanaFormaRestService: UmanaFormaRestServiceService) { }

  displayingSample(): boolean {
    return this.router.url.startsWith("/sample");
  }

  doLogin(event: Event): void {
    if (this.utente.password === "password") {
      switch (this.utente.username) {
        case "user":
          this.loginVerified();
          console.log(this.userDashboardChoise());
          this.router.navigateByUrl(this.userDashboardChoise());
          break;
        case "admin":
          this.loginVerified();
          console.log(this.userDashboardChoise());
          this.router.navigateByUrl(this.userDashboardChoise());
          break;
        default:
          console.log("Valori Errati!");
          break;
      }
    }
    /**  if (this.utente.username === "user" && this.utente.password === "password") {
       this.loginVerified();
       this.router.navigateByUrl(this.userDashboardChoise());
     } else {
       if (this.utente.username === "admin" && this.utente.password === "password") {
         this.loginVerified();
         console.log(this.utente.username);
         this.router.navigateByUrl(this.userDashboardChoise());
       } else {
         console.log("Valori Errati!");
       }
     }*/
    this.utente.clear();
    (window as any)["$"]('#staticBackdrop').modal('hide');
  }

  private loginOk(answer: string): void {
    this.message = answer;
  }

  private loginKo(error: HttpErrorResponse): void {
    console.error(error);
    /**TODO Creare messaggio di errore */
  }

  private loginVerified(): void {
    let response = this.umanaFormaRestService.login(this.utente.username, this.utente.password);
    response.subscribe((answer) => this.loginOk(answer), (error) => this.loginKo(error));
  }

  userDashboardChoise(): string {
    return "/dashboard-" + this.utente.username;
  }

}
