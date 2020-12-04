import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatiDettaglioComponent } from './candidati-dettaglio/candidati-dettaglio.component';
import { RouterModule } from '@angular/router';
import { CandidatiDettaglioItemComponent } from './candidati-dettaglio-item/candidati-dettaglio-item.component';



@NgModule({
  declarations: [CandidatiDettaglioComponent, CandidatiDettaglioItemComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    CandidatiDettaglioComponent, CandidatiDettaglioItemComponent
  ]
})
export class CandidatiDettaglioModule { }
export { CandidatiDettaglioComponent, CandidatiDettaglioItemComponent }
