import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-corsi-grazie',
  templateUrl: './corsi-grazie.component.html',
  styleUrls: ['./corsi-grazie.component.css']
})
export class CorsiGrazieComponent implements OnInit {

  course!: Course;

  constructor(private umanaRestService: UmanaRestService) { }

  ngOnInit(): void {
    this.umanaRestService.getCourseById(this.umanaRestService.currentCourseId)
    .subscribe((answer) => this.getCourseOk(answer), (error) => this.getCourseKo(error));
  }

  private getCourseOk(answer: Course): void {
    this.course = answer;
  }
  private getCourseKo(error: HttpErrorResponse): void {
    console.error(error);
  }

}
