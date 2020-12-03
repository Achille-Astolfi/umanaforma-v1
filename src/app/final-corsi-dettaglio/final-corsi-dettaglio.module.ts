import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalCorsiDettaglioComponent } from './final-corsi-dettaglio/final-corsi-dettaglio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FinalCorsiDettaglioComponent],
  imports: [
    CommonModule,
    IconsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
  ]
})
export class FinalCorsiDettaglioModule { }
