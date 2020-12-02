import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-corsi-iscriviti',
  templateUrl: './corsi-iscriviti.component.html',
  styleUrls: ['./corsi-iscriviti.component.css']
})
export class CorsiIscrivitiComponent implements OnInit {
  course!: Course;
  router: any;

  constructor(private umanaRestService: UmanaRestService, router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
    console.log(this.umanaRestService.currentCourseId);
    this.umanaRestService.getCourseById(this.umanaRestService.currentCourseId)
    .subscribe((answer) => this.getCourseOk(answer), (error) => this.getCourseKo(error));
  }

  //DA METTERE NEL SERVICE
  private getCourseOk(answer: Course): void {
    this.course = answer;
    console.log(this.course);
  }
  private getCourseKo(error: HttpErrorResponse): void {
    console.error(error);
  }

  doLogout(event:Event): void {
    this.umanaRestService.logout();
    this.router.navigateByUrl('/home');
  }

}
