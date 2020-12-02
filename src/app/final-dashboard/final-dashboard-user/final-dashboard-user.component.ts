import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/resources/course';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-dashboard-user',
  templateUrl: './final-dashboard-user.component.html',
  styleUrls: ['./final-dashboard-user.component.css']
})
export class FinalDashboardUserComponent implements OnInit {
  
  constructor(private logRest: LogRestService) { }

  ngOnInit(): void {

  }
}
