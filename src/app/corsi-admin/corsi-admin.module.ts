import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsiAdminComponent } from './corsi-admin/corsi-admin.component';
import { RouterModule } from '@angular/router';
import { CorsiAdminItemComponent } from './corsi-admin-item/corsi-admin-item.component';



@NgModule({
  declarations: [CorsiAdminComponent, CorsiAdminItemComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    CorsiAdminComponent
  ]
})
export class CorsiAdminModule { }
export { CorsiAdminComponent }
