import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidatesItemComponent } from './candidates-item/candidates-item.component';



@NgModule({
  declarations: [CandidatesComponent, CandidatesItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CandidatesComponent
  ]
})
export class CandidatesModule { }
export {CandidatesComponent}
