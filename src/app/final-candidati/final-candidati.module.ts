import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalCandidatiComponent } from './final-candidati/final-candidati.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FinalCandidatiComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class FinalCandidatiModule { }
