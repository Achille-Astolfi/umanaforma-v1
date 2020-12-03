import { Component, Input, OnInit } from '@angular/core';
import { UmanaRestService } from '../service/umana-rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public umanaRestService: UmanaRestService) { }

  ngOnInit(): void {
  }

  doLogout(event:Event): void {
    this.umanaRestService.logout();
  }
}
