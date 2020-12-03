import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/resource/course';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent implements OnInit {
  @Input() course!: Course;
  @Output() onAction = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  doAction(event: Event): void {
    this.onAction.emit(this.course);
  }

}
