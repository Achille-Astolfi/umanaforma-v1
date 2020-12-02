import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/resource/course';

@Component({
  selector: 'app-corsi-user-item',
  templateUrl: './corsi-user-item.component.html',
  styleUrls: ['./corsi-user-item.component.css']
})
export class CorsiUserItemComponent implements OnInit {

  @Input() course!: Course;

  constructor() { }

  ngOnInit(): void {
  }

  doAction(event: Event): void {

  }

}
