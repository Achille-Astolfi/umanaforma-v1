import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';
import { LoginFormClass } from '../login-form-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private username !: string;
  private password !: string;

  utente = new LoginFormClass();

  message?: string;

  constructor(
    private umanaFormaRestService : UmanaFormaRestServiceService
  ) { }

  ngOnInit(): void {
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


}