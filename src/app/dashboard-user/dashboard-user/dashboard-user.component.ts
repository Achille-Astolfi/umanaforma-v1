import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  router: Router;

  constructor(private umanaRestService: UmanaRestService, router: Router) {
    this.router=router;
   }

  ngOnInit(): void {
  }

  doLogout(event:Event): void {
    this.umanaRestService.logout();
    this.router.navigateByUrl('/home');
  }

}
