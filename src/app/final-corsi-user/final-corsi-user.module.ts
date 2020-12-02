import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalCorsiUserComponent } from './final-corsi-user/final-corsi-user.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FinalCorsiUserComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class FinalCorsiUserModule { }
