import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesDetailItemComponent } from './courses-detail-item/courses-detail-item.component';



@NgModule({
  declarations: [CoursesDetailComponent, CoursesDetailItemComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesDetailModule { }
