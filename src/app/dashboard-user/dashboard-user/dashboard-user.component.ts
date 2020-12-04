import { Component, OnInit } from '@angular/core';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  constructor(
    private umanaRestService: UmanaRestService
  ) { }

  ngOnInit(): void {
  }

  prova(): void {
    this.umanaRestService.prova();
  }

}
