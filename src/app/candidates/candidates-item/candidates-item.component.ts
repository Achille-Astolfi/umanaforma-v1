import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/resource/candidate';
import { TitleCourseService } from 'src/app/service/title-course.service';

@Component({
  selector: 'app-candidates-item',
  templateUrl: './candidates-item.component.html',
  styleUrls: ['./candidates-item.component.css']
})
export class CandidatesItemComponent implements OnInit {
  @Input() candidate!: Candidate;

  constructor(
    private router : Router,
    private titleCourse: TitleCourseService
  ) { }

  ngOnInit(): void {
  }

  printUserCourses() : void {
    this.titleCourse.setIdCandidate(this.candidate.id);
    this.titleCourse.setNameCandidate(this.candidate.firstName);
    this.titleCourse.setSurnameCandidate(this.candidate.lastName);
    this.router.navigateByUrl('candidate-courses');
  }

}
