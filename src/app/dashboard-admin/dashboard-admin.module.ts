import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [DashboardAdminComponent],
  imports: [
    CommonModule, IconsModule
  ],
  exports: [
    DashboardAdminComponent
  ]
})
export class DashboardAdminModule { }
export { DashboardAdminComponent }
