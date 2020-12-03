import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleCourseService {

  titleCourse?: string;
  idCourse!: number;

  constructor() { }

  setCourse(titleCourseService: string) {
    this.titleCourse = titleCourseService;
  }

  setIdCourse(idCourse: number){
    this.idCourse=idCourse;
  }

}