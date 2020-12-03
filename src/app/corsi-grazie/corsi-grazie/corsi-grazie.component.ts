import { Component, OnInit } from '@angular/core';
import { TitleCourseService } from 'src/app/service/title-course.service';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-corsi-grazie',
  templateUrl: './corsi-grazie.component.html',
  styleUrls: ['./corsi-grazie.component.css']
})
export class CorsiGrazieComponent implements OnInit {

  constructor( 
    public titleCourse: TitleCourseService,
    private titleService:TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Thanks for Registration");
  }

}