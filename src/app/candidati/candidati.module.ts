import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatiComponent } from './candidati/candidati.component';
import { CandidatiItemComponent } from './candidati-item/candidati-item.component';



@NgModule({
  declarations: [CandidatiComponent, CandidatiItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CandidatiComponent, CandidatiItemComponent
  ]
})
export class CandidatiModule { }
export { CandidatiComponent, CandidatiItemComponent }
