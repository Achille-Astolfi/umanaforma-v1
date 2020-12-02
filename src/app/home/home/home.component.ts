import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TokenResponse } from 'src/app/dto/token-response';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username = "";
  password = "";
  message = "";
  router: Router;

  constructor(
    public umanaRestService: UmanaRestService, router: Router
    ) { 
      this.router=router;
    }

  ngOnInit(): void {
  }

  doLogin(event: Event): void {
    let response = this.umanaRestService.login(this.username, this.password);
    response.subscribe((answer) => this.loginOk(answer), (error) => this.loginKo(error));
    
    (window as any)["$"]('#staticBackdrop').modal('hide');
  }

  private loginOk(answer: string): void {
    this.message = answer;
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
    console.error(error);
  }

}
