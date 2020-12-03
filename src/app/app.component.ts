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

  private bkUser !: string;
  private bkPassword !: string;

  message?: string;

  constructor(private router: Router, public umanaFormaRestService: UmanaFormaRestServiceService) { }

  displayingSample(): boolean {
    return this.router.url.startsWith("/sample");
  }

  doLogin(event: Event): void {
    this.utente.username = this.utente.username.split(' ').join('');
    this.bkUser = this.utente.username;
    this.bkPassword = this.utente.password;
    //console.log("User: " + this.bkUser + " Password: " + this.bkPassword);
    this.loginVerified();
  }

  private loginOk(answer: string): void {
    this.message = answer;
    this.router.navigateByUrl(this.userDashboardChoise());
    (window as any)["$"]('#staticBackdrop').modal('hide');
    this.umanaFormaRestService.userLogged = this.bkUser;
    this.umanaFormaRestService.logged = false; //non capisco il significato
    //this.utente.clear();
  }

  private loginKo(error: HttpErrorResponse): void {
    this.umanaFormaRestService.errorMessage = "Invalid Username or Password";
    //alert("Errore nel login");
    console.log("Valori Errati!");
    
  }

  private loginVerified(): void {
    let response = this.umanaFormaRestService.login(this.bkUser, this.bkPassword);
    response.subscribe((answer) => this.loginOk(answer), (error) => this.loginKo(error));
    this.clearAll(); 
  }

  userDashboardChoise(): string {
    if (this.bkUser === "user") {
      return "/dashboard-user";
    } else {
      return "/dashboard-admin";
    }
  }

  clearAll(): void {
    this.utente.clear();
    this.umanaFormaRestService.errorMessage = "";
  }

}
