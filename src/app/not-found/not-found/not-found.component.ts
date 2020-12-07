import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private titleService:TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Page Not Found");
  }

}