import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TokenRequest } from '../dto/token-request';
import { TokenResponse } from '../dto/token-response';
import { map } from "rxjs/operators";
import { Course } from '../resources/course';
import { CoursesResponse } from '../dto/courses-response';
import { Router } from '@angular/router';

const url = "/api";

@Injectable({
  providedIn: 'root'
})
export class LogRestService {

  roles = new Array<string>();
  
  //Il token di autorizzazione per le chiamare REST
  private token?: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string>{
    //this.mockRoles(username);
    let request = new TokenRequest();
    request.password = password;
    request.username = username;
    let response = this.http.post<TokenResponse>(url + "/token", request);
    console.log(request);
    console.log(response);
    //Questa operazione (MAPPATURA) mi trasforma un Observable<tipoA> a un Observable<tipoB>
    //la function map di rxjs serve proprio per trasformare la function da tipoA a tipoB
    //in una function da observable di tipoA ad un observable di tipoB
    return response.pipe(map((answer) => this.loginMap(answer)));
  }

  private loginMap(answer: TokenResponse): string{
    this.roles = answer.authorization.roles;
    console.log(this.roles);
    this.token = answer.authentication.token_type + " " + answer.authentication.access_token;
    console.log(this.token);
    return "Accesso effettuato correttamente.";
  }

    //Metodo usato da adminGuard
    isAdmin(): boolean{
      //Questo metodo restituisce true se "Admin" è un elemento di roles
      //restituisce false se "Admin" non è un elemento di roles
      console.log("SEI UNO ADMIN");
      return this.roles.indexOf("ADMIN") >= 0; //da true se è maggiore di 0 (quindi se esiste)
    }
  
    isUser(): boolean{
      //Questo metodo restituisce true se "User" è un elemento di roles
      //restituisce false se "User" non è un elemento di roles
      console.log("SEI UNO USER");
      return this.roles.indexOf("USER") >= 0; //da true se è maggiore di 0 (quindi se esiste)
      
    }


}
