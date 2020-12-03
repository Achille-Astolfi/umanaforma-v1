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
  private username !: string;
  private password !: string;
  utente = new LoginFormClass();

  message?: string;

  constructor(private router: Router, public umanaFormaRestService: UmanaFormaRestServiceService) { }

  displayingSample(): boolean {
    return this.router.url.startsWith("/sample");
  }

  doLogin(event: Event): void {
    /*if (this.utente.password === "password") {
      switch (this.utente.username) {
        case "user":
        case "admin":
          this.loginVerified();
          console.log(this.userDashboardChoise());
          this.router.navigateByUrl(this.userDashboardChoise());
          (window as any)["$"]('#staticBackdrop').modal('hide');
          this.utente.clear();
          break;
        default:
          this.loginVerified();
          console.log("Valori Errati!");
          this.umanaFormaRestService.errorMessage = "Invalid Username or Password";
          this.utente.clear();
          break;
      }
    } else {
      this.loginVerified();
      this.umanaFormaRestService.errorMessage = "Invalid Username or Password";
      this.utente.clear();
    }*/

    this.loginVerified();
  }

  private loginOk(answer: string): void {
    this.message = answer;
    this.router.navigateByUrl(this.userDashboardChoise());
    (window as any)["$"]('#staticBackdrop').modal('hide');
    this.umanaFormaRestService.userLogged = this.utente.username;
    this.umanaFormaRestService.logged = false;
    //this.utente.clear();
  }

  private loginKo(error: HttpErrorResponse): void {
    alert("Errore nel login: " + error);
    console.log("Valori Errati!");
    this.umanaFormaRestService.errorMessage = "Invalid Username or Password";
    this.utente.clear();
  }

  private loginVerified(): void {
    let response = this.umanaFormaRestService.login(this.utente.username, this.utente.password);
    response.subscribe((answer) => this.loginOk(answer), (error) => this.loginKo(error));
  }

  userDashboardChoise(): string {
    if(this.utente.username === "user") {
      return "/dashboard-user";
    } else {
      return "/dashboard-admin";
    }
    
  }

}
