import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenRequest } from '../dto/token-request';
import { TokenResponse } from '../dto/token-response';
import { Router } from '@angular/router';
import { CoursesResponse } from '../dto/courses-response';
import { Course } from '../resource/course';
import { CandidatesRequest } from '../dto/candidates-request';
import { CandidatesResponse } from '../dto/candidates-response';
import { Candidate } from '../resource/candidate';
import { SubscriptionRequest } from '../dto/subscription-request';

const url = "/api";

@Injectable({
  providedIn: 'root'
})
export class UmanaFormaRestServiceService {

  roles = new Array<string>();

  userLogged?: string;

  private token?: string;

  logged = true;
  public errorMessage?: string;

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

    //console.log(this.token);
    return "Login done";
  }

  isLogged(): boolean {
    return this.token !== undefined;
  }

  isAdmin(): boolean {
    return this.roles.indexOf("ADMIN") >= 0;
  }

  isUser(): boolean {
    return this.roles.indexOf("USER") >= 0 && !this.isAdmin();
  }

  logout(): Observable<string> {
    this.logged = true;
    this.userLogged = "";
    this.token = undefined;
    this.errorMessage = "";
    this.roles = [];
    this.router.navigateByUrl("/home");
    return from(["Logout effettuato correttamente!"]);
  }
  
  getCourses(): Observable<Course[]> {
    if (this.token === undefined) {
      // posso restituire undefined o un observable vuoto
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });
    let response = this.http.get<CoursesResponse>(url + "/courses", { headers });
    return response.pipe(map((answer) => this.getCoursesMap(answer)));
  }

  private getCoursesMap(answer: CoursesResponse): Course[] {
    return answer._embedded.courses;
  }

  getCourseById(id: number): Observable<Course> {
    if (this.token === undefined) {
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });
    return this.http.get<Course>(url + "/courses/" + id, { headers });
  }

  getCandidates(): Observable<Candidate[]> {
    if (this.token === undefined) {
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });
    let response = this.http.get<CandidatesResponse>(url + "/candidates", { headers });
    return response.pipe(map((answer) => this.getCandidatesMap(answer)));
  }
/**TODO Problema riscontrato da Claudiu sulla subscription:
 * Per risolvere il problema descritto da Claudiu, bisogna una volta ricevuto il primo error 409 (relativo al candidato già esistente), 
 * lanciare la sola post subscription dell'utente gia esistente (il problema è recuperare l'id dell'utente già esistente, 
 * non c'è una get che fa questo settata sul server), 
 * nel caso di un secondo 409 error allora l'utente oltre ad esistere già è anche giè iscritto a quel particolare corso */

  getCandidateById(id: number): Observable<Candidate> { 
    if (this.token === undefined) {
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });
    //let response = this.http.get<CandidatesResponse>(url + "/candidates" + id, { headers });
    return this.http.get<Candidate>(url + "/candidates" + id, { headers });
  }

  private getCandidatesMap(answer: CandidatesResponse): Candidate[] {
    return answer._embedded.candidates;
  }

  onAddCandidate(first: string, last: string, email: string): Observable<string | null> {
    if (this.token === undefined) {
      return from([]);
    }
    let request = new CandidatesRequest();
    request.firstName = first;
    request.lastName = last;
    request.emailAddress = email;

    let headers = new HttpHeaders({ authorization: this.token });
    let response = this.http.post<null>(url + "/candidates", request, { headers, observe: "response" })
    return response.pipe(map((answer) => this.onAddCandidateMap(answer)));
  }

  private onAddCandidateMap(answer: HttpResponse<null>): string | null {
    //console.log("Location: " + answer.headers.get("location"));
    return answer.headers.get("location");
  }

  onAddSubscription(course: number, candidate: number): Observable<number | null> {
    if (this.token === undefined) {
      return from([]);
    }
    let request = new SubscriptionRequest();
    request.course = course;
    request.candidate = candidate;
    //console.log("Request Course: "+ request.course +" "+"Request Candidate: "+ request.candidate);

    let headers = new HttpHeaders({ authorization: this.token });
    let response = this.http.post<null>(url + "/subscriptions", request, { headers, observe: "response" })
    return response.pipe(map((answer) => this.onAddSubscriptionMap(answer)));
  }

  public onAddSubscriptionMap(answer: HttpResponse<null>): number | null {
    //console.log(answer.status);
    return answer.status;
  }

}
