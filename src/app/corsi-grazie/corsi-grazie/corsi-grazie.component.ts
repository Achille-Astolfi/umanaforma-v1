import { Component, OnInit } from '@angular/core';
import { TitleCourseService } from 'src/app/service/title-course.service';

@Component({
  selector: 'app-corsi-grazie',
  templateUrl: './corsi-grazie.component.html',
  styleUrls: ['./corsi-grazie.component.css']
})
export class CorsiGrazieComponent implements OnInit {

  constructor( 
    public titleCourse: TitleCourseService
  ) { }

  ngOnInit(): void {
  }

}
