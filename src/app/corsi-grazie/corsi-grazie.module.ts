import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsiGrazieComponent } from './corsi-grazie/corsi-grazie.component';



@NgModule({
  declarations: [CorsiGrazieComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CorsiGrazieComponent
  ]
})
export class CorsiGrazieModule { }
export { CorsiGrazieComponent }
