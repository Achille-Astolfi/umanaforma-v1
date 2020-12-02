import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenRequest } from '../dto/token-request';
import { TokenResponse } from '../dto/token-response';
import { map } from 'rxjs/operators';

const url = "/api";

@Injectable({
  providedIn: 'root'
})
export class UmanaRestService {

  roles = new Array<string>();
  
  private token?: string;

  constructor(private http: HttpClient) { }

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
}