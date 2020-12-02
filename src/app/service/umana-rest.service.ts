import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenRequest } from '../dto/token-request';
import { TokenResponse } from '../dto/token-response';

const url = "/api";

@Injectable({
  providedIn: 'root'
})
export class UmanaRestService {

  private token?: string;
  roles = new Array<string>();
  username?: string;

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<string> {
    let request = new TokenRequest();
    request.username = username;
    request.password = password;
    let response = this.http.post<TokenResponse>(url + "/token", request);
    return response.pipe(map((answer) => this.loginMap(answer)));
  }
  private loginMap(answer: TokenResponse): string {
    this.username = answer.authorization.username;
    this.roles = answer.authorization.roles;
    this.token = answer.authentication.token_type + ' ' + answer.authentication.access_token;
    return this.username;
  }

  isUser():boolean {
    return this.roles.indexOf("USER") >= 0;
  }
  isAdmin(): boolean {
    return this.roles.indexOf("ADMIN") >= 0;
  }
  isSimpleUser(): boolean {
    return this.isUser() && !this.isAdmin();
  }
}
