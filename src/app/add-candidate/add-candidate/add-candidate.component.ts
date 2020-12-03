import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatesRequest } from 'src/app/dto/candidates-request';
import { TitleCourseService } from 'src/app/service/title-course.service';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  nome!: string;
  cognome!: string;
  email!: string;

  constructor(
    public titleCourse: TitleCourseService,
    public umanaFormaRestService: UmanaFormaRestServiceService
  ) { }

  ngOnInit(): void {
  }

  addToForm(event: Event): void {
    let response = this.umanaFormaRestService.onAddCandidate(this.nome, this.cognome, this.email);
    response.subscribe((answer) => this.addToFormOk(answer), (error) => this.addToFormKo(error));
  }

  addToFormOk(answer: string | null) {
    if (answer !== null) {
      let id = answer.lastIndexOf("/");
      let val = answer.substring(id  +1);
      console.log("Val: " + val);
    }
  }

  addToFormKo(error: HttpErrorResponse) {
    console.error(error.status);
  }

}
