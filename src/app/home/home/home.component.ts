import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() usernameEmitter = new EventEmitter<String>();

  constructor(
    public umanaRestService: UmanaRestService,) { 
    }

  ngOnInit(): void {
  }

}
