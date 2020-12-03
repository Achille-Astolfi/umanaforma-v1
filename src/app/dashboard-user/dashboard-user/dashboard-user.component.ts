import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  constructor( private titleService:TitleService) { }

  ngOnInit(): void {
    this.titleService.setPage("Dashboard User");
  }

}
