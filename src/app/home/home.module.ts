import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, IconsModule, FormsModule, RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
export { HomeComponent }
