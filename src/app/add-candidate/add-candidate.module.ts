import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddCandidateComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddCandidateComponent
  ]
})
export class AddCandidateModule { }
export { AddCandidateComponent }
