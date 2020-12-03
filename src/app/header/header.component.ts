import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogRestService } from '../service/log-rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message!: string;

  constructor(public logRest: LogRestService, private router: Router) { }

  ngOnInit(): void {
    
  }

  checkRole(): string | undefined{
    return this.logRest.username;
    
  }

  onLogout(event:Event):void{
    this.logRest.logout()
        .subscribe((answer)=>this.onLogoutOk(answer), (error) => this.onLogoutKo(error));
  }

  private onLogoutOk(answer: string): void{
    this.message = answer;
    this.router.navigateByUrl("/home");
  }

  private onLogoutKo(error: HttpErrorResponse): void{
    console.error(error);
  }

}
