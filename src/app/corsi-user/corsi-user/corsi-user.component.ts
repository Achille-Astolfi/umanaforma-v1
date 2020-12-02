import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-corsi-user',
  templateUrl: './corsi-user.component.html',
  styleUrls: ['./corsi-user.component.css']
})
export class CorsiUserComponent implements OnInit {

  router: Router;

  courseList = [] as Course[];

  constructor(private umanaRestService: UmanaRestService, router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
    this.umanaRestService.getCourses()
    .subscribe((answer) => this.getCoursesOk(answer), (error) => this.getCoursesKo(error));
  }

  private getCoursesOk(answer: Course[]): void {
    this.courseList = answer;
  }
  private getCoursesKo(error: HttpErrorResponse): void {
    console.error(error);
  }
  
  doLogout(event:Event): void {
    this.umanaRestService.logout();
    this.router.navigateByUrl('/home');
  }
}
