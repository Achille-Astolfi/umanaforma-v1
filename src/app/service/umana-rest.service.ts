import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TokenRequest } from '../dto/token-request';
import { TokenResponse } from '../dto/token-response';
import { map } from 'rxjs/operators';
import { Course } from '../resource/course';
import { CoursesResponse } from '../dto/courses-response';

const url = "/api";

@Injectable({
  providedIn: 'root'
})
export class UmanaRestService {

  roles = new Array<string>();
  
  private token?: string;

  constructor(private http: HttpClient) { }

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
}
