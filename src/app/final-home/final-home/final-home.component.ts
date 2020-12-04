import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/class/person';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-home',
  templateUrl: './final-home.component.html',
  styleUrls: ['./final-home.component.css']
})
export class FinalHomeComponent implements OnInit {

  message!: string;
  userAdmin!: boolean;

  constructor(private logRest: LogRestService,private router:Router) { }

  ngOnInit(): void {
  }
}
