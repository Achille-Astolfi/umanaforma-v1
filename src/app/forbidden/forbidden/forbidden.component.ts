import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  constructor(
    private titleService:TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Forbidden!");
  }

}
