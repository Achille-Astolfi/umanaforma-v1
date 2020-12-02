import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
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
