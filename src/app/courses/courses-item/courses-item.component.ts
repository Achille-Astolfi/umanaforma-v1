import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/resource/course';
import { TitleCourseService } from 'src/app/service/title-course.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  doAction(event: Event): void {
    this.titleCourse.setCourse(this.course.description);
    this.titleCourse.setIdCourse(this.course.id);
    this.router.navigateByUrl("/add-candidate");
  }

}
