import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/resource/course';
import { TitleCourseService } from 'src/app/service/title-course.service';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent implements OnInit {
  @Input() course!: Course;
  @Output() onAction = new EventEmitter<Course>();

  constructor(
    private titleCourse: TitleCourseService,
    private router: Router,
    public umanaFormaRestService : UmanaFormaRestServiceService
  ) { }

  ngOnInit(): void {
  }

  doAction(event: Event): void {
    this.titleCourse.setCourse(this.course.description);
    this.titleCourse.setIdCourse(this.course.id);
    this.router.navigateByUrl("/add-candidate");
  }

  doActionDetail(event: Event): void {
    this.router.navigateByUrl("/corsi-dettaglio");
  }

}
