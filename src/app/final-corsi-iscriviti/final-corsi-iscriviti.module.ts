import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { FinalCorsiIscrivitiComponent } from './final-corsi-iscriviti/final-corsi-iscriviti.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FinalCorsiIscrivitiComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ]
})
export class FinalCorsiIscrivitiModule { }
