import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardAdminComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    DashboardAdminComponent
  ]
})
export class DashboardAdminModule { }
export {DashboardAdminComponent}
