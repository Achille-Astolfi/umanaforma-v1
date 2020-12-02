import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsiIscrivitiComponent } from './corsi-iscriviti/corsi-iscriviti.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CorsiIscrivitiComponent],
  imports: [
    CommonModule, IconsModule, RouterModule
  ],
  exports: [
    CorsiIscrivitiComponent
  ]
})
export class CorsiIscrivitiModule { }
export { CorsiIscrivitiComponent }
