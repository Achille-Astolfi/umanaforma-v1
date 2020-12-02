import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, IconsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
export { HomeComponent }
