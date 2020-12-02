import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { FinalCorsiIscrivitiComponent } from './final-corsi-iscriviti/final-corsi-iscriviti.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FinalCorsiIscrivitiComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class FinalCorsiIscrivitiModule { }
