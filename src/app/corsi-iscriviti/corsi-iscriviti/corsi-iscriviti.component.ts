import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenRequestIscrizione } from 'src/app/dto/token-request-iscrizione';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-corsi-iscriviti',
  templateUrl: './corsi-iscriviti.component.html',
  styleUrls: ['./corsi-iscriviti.component.css']
})
export class CorsiIscrivitiComponent implements OnInit {
  person = new TokenRequestIscrizione();
  course!: Course;
  router: any;
  error = false;

  constructor(private umanaRestService: UmanaRestService, router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
    this.umanaRestService.getCourseById(this.umanaRestService.currentCourseId)
    .subscribe((answer) => this.getCourseOk(answer), (error) => this.getCourseKo(error));
  }

  doRegister(event: Event): void {
    let response = this.umanaRestService.registerCourse(this.course.id, this.person.firstName, this.person.lastName, this.person.emailAddress);
    response.subscribe((answer) => this.registerOk(answer), (error) => this.registerKo(error));
  }

  private registerOk(answer: string): void {
    let candidateId = parseInt(answer);
    let response = this.umanaRestService.subscriptionCourseid(this.course.id, candidateId);
    response.subscribe((answer) => this.subscriptionOk(answer), (error) => this.subscriptionKo(error));
  }

  private registerKo(error: HttpErrorResponse): void {
    this.error = true;
    console.error(error);
    //spegnimento errore
    setTimeout(() => {
      this.error = false;
    }, 4000);
  }

  private subscriptionOk(answer: string): void {
    this.router.navigateByUrl("/corsi-grazie");
  }

  private subscriptionKo(error: HttpErrorResponse): void {
    console.error(error);
  }

  private getCourseOk(answer: Course): void {
    this.course = answer;
  }
  private getCourseKo(error: HttpErrorResponse): void {
    console.error(error);
  }

  doLogout(event:Event): void {
    this.umanaRestService.logout();
    this.router.navigateByUrl('/home');
  }

}
