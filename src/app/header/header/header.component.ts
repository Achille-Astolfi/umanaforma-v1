import { Component, OnInit } from '@angular/core';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private umanaRestService: UmanaRestService
  ) { }

  ngOnInit(): void {
  }

  loggedUser(): string | undefined {
    return this.umanaRestService.username;
  }

}
