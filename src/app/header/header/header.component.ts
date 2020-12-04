import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private umanaRestService: UmanaRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loggedUser(): string | undefined {
    return this.umanaRestService.username;
  }

  homeLink(): string {
    if (this.umanaRestService.isAdmin()) {
      return "/dashboard-admin";
    } else if (this.umanaRestService.isUser()) {
      return "/dashboard-user";
    } else {
      return "/home";
    }
  }

  doLogout(event: Event): void {
    this.umanaRestService.logout();
    this.router.navigateByUrl("/home");
  }
}
