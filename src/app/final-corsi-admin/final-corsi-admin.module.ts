import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalCorsiAdminComponent } from './final-corsi-admin/final-corsi-admin.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FinalCorsiAdminComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class FinalCorsiAdminModule { }
