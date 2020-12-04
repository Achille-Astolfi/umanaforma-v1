import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleCourseService {

  titleCourse?: string;
  idCourse!: number;
  idCandidate!: number;
  nameCandidate!: string;
  surnameCandidate!: string;

  constructor() { }

  setCourse(titleCourseService: string) {
    this.titleCourse = titleCourseService;
  }

  setIdCourse(idCourse: number){
    this.idCourse = idCourse;
  }

  setIdCandidate(idCandidate: number){
    this.idCandidate = idCandidate;
  }

  setNameCandidate(nameCandidate: string){
    this.nameCandidate = nameCandidate;
  }

  setSurnameCandidate(surnameCandidate: string){
    this.surnameCandidate = surnameCandidate;
  }

}