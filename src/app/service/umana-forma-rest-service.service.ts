import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenRequest } from '../dto/token-request';
import { TokenResponse } from '../dto/token-response';
import { Router } from '@angular/router';

const url="/api";

@Injectable({
  providedIn: 'root'
})
export class UmanaFormaRestServiceService {

  roles = new Array<string>();

  userLogged?: string;

  private token?: string;

  logged = true; 
  public errorMessage? : string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(username: string, password: string): Observable<string> {
    let request = new TokenRequest();
    request.username = username;
    request.password = password;
    
    let response = this.http.post<TokenResponse>(url + "/token", request);

    return response.pipe(map((answer) => this.loginMap(answer)));
  }

  private loginMap(answer: TokenResponse): string {
    this.roles = answer.authorization.roles;
    this.token = answer.authentication.token_type + ' ' + answer.authentication.access_token;
    
    console.log(this.token);
    return "Un saluto dal gruppo 1";
  }

  isLogged(): boolean {
    return this.token !== undefined;
  }

  isAdmin(): boolean {
    return this.userLogged === "admin";
  }

  logout(): Observable<string>{
    this.logged = true;
    this.userLogged = "";
    this.token = undefined;
    this.errorMessage="";
    this.roles = [];
    this.router.navigateByUrl("/home");
    return from(["Logout effettuato correttamente!"]);
  }
   /*getCourses(): Observable<Course[]> {
    if (this.token === undefined) {
      // posso restituire undefined o un observable vuoto
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });
    let response = this.http.get<CoursesResponse>(url + "/courses", { headers });
    return response.pipe(map((answer) => this.getCoursesMap(answer)));
  }*/
}
