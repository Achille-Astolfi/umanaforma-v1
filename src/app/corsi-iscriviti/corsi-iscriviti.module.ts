import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsiIscrivitiComponent } from './corsi-iscriviti/corsi-iscriviti.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CorsiIscrivitiComponent],
  imports: [
    CommonModule, IconsModule, RouterModule, FormsModule
  ],
  exports: [
    CorsiIscrivitiComponent
  ]
})
export class CorsiIscrivitiModule { }
export { CorsiIscrivitiComponent }
