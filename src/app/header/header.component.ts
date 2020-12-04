import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UmanaRestService } from '../service/umana-rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = "";
  password = "";
  error = false;

  constructor(public umanaRestService: UmanaRestService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(event: Event): void {
    let response = this.umanaRestService.login(this.username, this.password);
    response.subscribe((answer) => this.loginOk(answer), (error) => this.loginKo(error));
  }

  private loginOk(answer: string): void {
    (window as any)["$"]('#staticBackdrop').modal('hide');
    switch(this.username) {
      case "user":
        this.router.navigateByUrl('/dashboard-user');
        break;
      case "admin":
        this.router.navigateByUrl('/dashboard-admin');
        break;
      default:
        break;
    }    
  }

  private loginKo(error: HttpErrorResponse): void {
    this.error = true;
    console.error(error);
    //spegnimento errore
    setTimeout(() => {
      this.error = false;
    }, 4000);
  }

  doLogout(event:Event): void {
    this.umanaRestService.logout();
  }
}
