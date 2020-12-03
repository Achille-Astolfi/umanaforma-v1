import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';



@NgModule({
  declarations: [CoursesComponent, CoursesItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
export {CoursesComponent}
