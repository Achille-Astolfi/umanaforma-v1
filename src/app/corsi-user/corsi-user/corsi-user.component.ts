import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-corsi-user',
  templateUrl: './corsi-user.component.html',
  styleUrls: ['./corsi-user.component.css']
})
export class CorsiUserComponent implements OnInit {

  courseList = [] as Course[];

  constructor(private umanaRestService: UmanaRestService) { }

  ngOnInit(): void {
    console.log("CIAO");
    this.umanaRestService.getCourses()
    .subscribe((answer) => this.getCoursesOk(answer), (error) => this.getCoursesKo(error));
  }

  private getCoursesOk(answer: Course[]): void {
    this.courseList = answer;
  }
  private getCoursesKo(error: HttpErrorResponse): void {
    console.log("ehfshfshj");
    console.error(error);
  }

}
