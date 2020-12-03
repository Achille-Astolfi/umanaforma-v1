import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TokenRequest } from '../dto/token-request';
import { TokenResponse } from '../dto/token-response';
import { map } from 'rxjs/operators';
import { Course } from '../resource/course';
import { CoursesResponse } from '../dto/courses-response';
import { TokenRequestIscrizione } from '../dto/token-request-iscrizione';
import { Router } from '@angular/router';
import { TokenRequestSubscription } from '../dto/token-request-subscription';
import { Candidate } from '../resource/candidate';
import { CandidatesResponse } from '../dto/candidates-response';
import { ElencoCandidatiResponse } from '../dto/elenco-candidati-response';

const url = "/api";

@Injectable({
  providedIn: 'root'
})
export class UmanaRestService {

  roles = new Array<string>();
  
  private token?: string;

  constructor(private http: HttpClient, private router: Router) { }

  currentCourseId!: number;

  //LOGIN

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
    return "accesso effettuato correttamente";
  }

  isUser(): boolean {
    return this.roles.indexOf("USER") >= 0;
  }

  isAdmin(): boolean {
    return this.roles.indexOf("ADMIN") >= 0;
  }

  isLogged(): boolean {
    return (this.token!==undefined);
  }

  logout(): Observable<string> {
    this.roles = [];
    this.token = undefined;
    this.currentCourseId = NaN;
    this.router.navigateByUrl("/home");
    return from(["Logout effettuato correttamente."]);
  }

  //CORSI

  getCourses(): Observable<Course[]> {
    if (this.token === undefined) {
      console.log("from");
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
    let response = this.http.get<Course>(url + "/courses/" + id, {headers});
    return response;
  }

  getCourseId(id: number): void {
    this.currentCourseId = id;
  }

  registerCourse(id: number, firstName: string, lastName: string, emailAddress: string): Observable<string> {
    let request = new TokenRequestIscrizione();
    request.firstName = firstName;
    request.lastName = lastName;
    request.emailAddress = emailAddress;

    if (this.token === undefined) {
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });

    let response = this.http.post<null>(url + "/candidates", request, { headers, observe: "response" })
    return response.pipe(map((answer) => this.iscrizioneMap(answer)));
  }

  private iscrizioneMap(answer: HttpResponse<null>): string {
    console.log(answer.headers.get("location"));
    let tempString = answer.headers.get("location");
    tempString = tempString!.charAt(tempString!.length-1);
    return tempString;
  }

  subscriptionCourseid(course: number, candidate: number): Observable<string> {
    let request = new TokenRequestSubscription();
    request.course = course;
    request.candidate = candidate;

    if (this.token === undefined) {
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });

    let response = this.http.post<null>(url + "/subscriptions", request, { headers, observe: "response" })
    return response.pipe(map((answer) => this.subscriptionMap(answer)));
  }

  private subscriptionMap(answer: HttpResponse<null>): string {
    return "Sottoscrizione effettuata.";
  }

  //CANDIDATI

  getCandidates(): Observable<Candidate[]> {
    if (this.token === undefined) {
      console.log("from");
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });
    let response = this.http.get<CandidatesResponse>(url + "/courses/" + this.currentCourseId, { headers });
    return response.pipe(map((answer) => this.getCandidatesMap(answer)));
  }

  private getCandidatesMap(answer: CandidatesResponse): Candidate[] {
    let candidates = new Array<Candidate>();
    answer.subscriptions.forEach(element => {
      candidates.push(element.candidate);
    }); 
    return candidates;
  }

  getElencoCandidati(): Observable<Candidate[]> {
    if (this.token === undefined) {
      console.log("from");
      return from([]);
    }
    let headers = new HttpHeaders({ authorization: this.token });
    let response = this.http.get<ElencoCandidatiResponse>(url + "/candidates", { headers });
    return response.pipe(map((answer) => this.getElencoCandidatiMap(answer)));
  }

  private getElencoCandidatiMap(answer: ElencoCandidatiResponse): Candidate[] {
    return answer._embedded.candidates;
  }
}
