import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalHomeComponent } from './final-home/final-home.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FinalHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FinalHomeComponent
  ]
})
export class FinalHomeModule { }
export { FinalHomeComponent }