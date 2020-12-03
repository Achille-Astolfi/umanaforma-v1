import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalCorsiGrazieComponent } from './final-corsi-grazie/final-corsi-grazie.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FinalCorsiGrazieComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class FinalCorsiGrazieModule { }
