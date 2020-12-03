import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsiDettaglioComponent } from './corsi-dettaglio/corsi-dettaglio.component';
import { CorsiDettaglioItemComponent } from './corsi-dettaglio-item/corsi-dettaglio-item.component';



@NgModule({
  declarations: [CorsiDettaglioComponent, CorsiDettaglioItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CorsiDettaglioComponent, CorsiDettaglioItemComponent
  ]
})
export class CorsiDettaglioModule { }
export { CorsiDettaglioComponent, CorsiDettaglioItemComponent }