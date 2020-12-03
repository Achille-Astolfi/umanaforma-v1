import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/service/title.service';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private titleService:TitleService) { }

  ngOnInit(): void {
    this.titleService.setPage("Dashboard Admin");
  }

}
