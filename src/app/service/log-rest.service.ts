import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TokenRequest } from '../dto/token-request';
import { TokenResponse } from '../dto/token-response';
import { map } from "rxjs/operators";
import { Course } from '../resources/course';
import { CoursesResponse } from '../dto/courses-response';
import { CandidatesRequest } from '../dto/candidates-request';
import { SubscriptionsRequest } from '../dto/subscriptions-request';
import { Candidate } from '../resources/candidate';
import { CandidateTotResponse } from '../dto/candidate-tot-response';

const url = "/api";

@Injectable({
  providedIn: 'root'
})
export class LogRestService {

  isAlive = false;
  roles = new Array<string>();
  corso!: Course;
  candidate = new Array<Candidate>();
  candidateTot = new Array<Candidate>();
  
  //Il token di autorizzazione per le chiamare REST
  private token?: string;
  username?: string;

  constructor(private http: HttpClient) { }

  checkAlive(): void{
    let response = this.http.get<any>(url);
    response.subscribe((answer) => this.aliveOk(answer), (error) => this.aliveKo(error));
  }
  private aliveOk(answer: any): void {
    this.isAlive=true;
  }
  private aliveKo(error: HttpErrorResponse): void {
    this.isAlive=false;
  }


  login(username: string, password: string): Observable<string>{
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
    this.username = answer.authorization.username;
    console.log(this.roles);
    console.log(this.username);
    this.token = answer.authentication.token_type + " " + answer.authentication.access_token;
    console.log(this.token);
    return "Accesso effettuato correttamente.";
  }

  logout(): Observable<string>{
    this.roles = [];
    this.token = undefined;
    return from(["Logout effettuato correttamente."]);
  }

    //Metodo usato da adminGuard
    isAdmin(): boolean{
      //Questo metodo restituisce true se "Admin" è un elemento di roles
      //restituisce false se "Admin" non è un elemento di roles
      return this.roles.indexOf("ADMIN") >= 0; //da true se è maggiore di 0 (quindi se esiste)
    }
  
    isUser(): boolean{
      //Questo metodo restituisce true se "User" è un elemento di roles
      //restituisce false se "User" non è un elemento di roles
      return this.roles.indexOf("USER") >= 0; //da true se è maggiore di 0 (quindi se esiste) 
    }

    getCourses(): Observable<Course[]>{
      if(this.token === undefined){
        return from([]);
      }
      let headers = new HttpHeaders({authorization: this.token});
  
      let response = this.http.get<CoursesResponse>(url + "/courses", {headers});
  
      return response.pipe(map((answer) => this.getCoursesMap(answer)));
    }
  
    getCoursesMap(answer: CoursesResponse): Course[]{
      return answer._embedded.courses;
    }

    postCandidate(firstName: string, lastName: string, emailAddress: string): Observable<string>{
      if (this.token === undefined) {
        return from([]);
      }
      let headers = new HttpHeaders({ authorization: this.token });
      let request = new CandidatesRequest();
      request.lastName = lastName;
      request.firstName = firstName;
      request.emailAddress = emailAddress;
      let response = this.http.post<null>(url + "/candidates", request, { headers, observe: "response" });
      console.log(request.emailAddress + " iscriviti");
      console.log(response + " iscriviti");
      //Questa operazione (MAPPATURA) mi trasforma un Observable<tipoA> a un Observable<tipoB>
      //la function map di rxjs serve proprio per trasformare la function da tipoA a tipoB
      //in una function da observable di tipoA ad un observable di tipoB
      return response.pipe(map((answer) => this.candidateMap(answer)));
    }
  
    private candidateMap(answer: HttpResponse<null>): string{
      let location = answer.headers.get("location");
      if(location !== null){
        let id = location?.lastIndexOf("/") + 1;
        console.log("ID = " + location.substring(id));
        return location.substring(id);
      }
      return "Iscrizione non effettuata correttamente.";
    }

    postSubscription(course: number, candidate: number): Observable<string>{
      if (this.token === undefined) {
        return from([]);
      }
      let headers = new HttpHeaders({ authorization: this.token });
      let request = new SubscriptionsRequest();
      request.course = course;
      request.candidate = candidate;
      let response = this.http.post<null>(url + "/subscriptions", request, {headers});
      return response.pipe(map((answer) => this.subscriptionMap(answer)));
    }

    subscriptionMap(answer: null): string {
      console.log("Sottoscrizione riuscita con successo");
      return "Sottoscrizione effettuata correttamente.";
    }

    getCourseById(id:number):Observable<Course>{
      if (this.token === undefined) {
        return from([]);
      }
      let headers = new HttpHeaders({ authorization: this.token });
      let response = this.http.get<Course>(url + "/courses/" + id, {headers});
      return response;
    }

    getTotCandidate(): Observable<CandidateTotResponse>{
      if (this.token === undefined) {
        return from([]);
      }
      let headers = new HttpHeaders({ authorization: this.token });
      let response = this.http.get<CandidateTotResponse>(url + "/candidates", {headers});
      return response;
    }
    
}
