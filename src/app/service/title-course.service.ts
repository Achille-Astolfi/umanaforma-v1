import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleCourseService {

  titleCourse?: string;

  constructor() { }

  setCourse(titleCourseService: string) {
    this.titleCourse = titleCourseService;
  }

}