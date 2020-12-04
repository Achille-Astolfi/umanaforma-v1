import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCourseSubscribedComponent } from './candidate-course-subscribed/candidate-course-subscribed.component';



@NgModule({
  declarations: [CandidateCourseSubscribedComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CandidateCourseSubscribedComponent
  ]
})
export class CandidateCourseSubscribedModule { }
export {CandidateCourseSubscribedComponent}
