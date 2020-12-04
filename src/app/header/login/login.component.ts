import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormTemplate } from 'src/app/model/login-form-template';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

const $ = (window as any)["$"];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formTemplate = new LoginFormTemplate();
  error = false;

  constructor(
    private umanaRestService: UmanaRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    $('#staticBackdrop').on('show.bs.modal', () => this.clear());
  }

  clear() {
    $('#username').val('')
    $('#password').val('')
    this.formTemplate.clear();
  }

  doLogin(event: Event): void {
    let response = this.umanaRestService.login(this.formTemplate.username, this.formTemplate.password);
    response.subscribe((answer) => this.doLoginOk(answer), (error) => this.doLoginKo(error));
  }
  private doLoginOk(answer: string): void {
    $('#staticBackdrop').modal('hide');
    console.log(answer);
    if (this.umanaRestService.isAdmin()) {
      this.router.navigateByUrl("/dashboard-admin");
    } else if (this.umanaRestService.isUser()) {
      this.router.navigateByUrl("/dashboard-user");
    }
  }
  private doLoginKo(error: HttpErrorResponse): void {
    this.error = true;
    console.error(error);
    setTimeout(() => this.error = false, 5000);
  }
}
