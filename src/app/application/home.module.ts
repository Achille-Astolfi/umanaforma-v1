import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, IconsModule, FormsModule
  ], exports:[HomeComponent]
})
export class ApplicationModule { }
export {HomeComponent}