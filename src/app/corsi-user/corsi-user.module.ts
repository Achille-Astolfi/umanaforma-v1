import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsiUserComponent } from './corsi-user/corsi-user.component';
import { IconsModule } from '../icons/icons.module';
import { CorsiUserItemComponent } from './corsi-user-item/corsi-user-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CorsiUserComponent, CorsiUserItemComponent],
  imports: [
    CommonModule, IconsModule, RouterModule
  ],
  exports: [
    CorsiUserComponent
  ]
})
export class CorsiUserModule { }
export { CorsiUserComponent }
