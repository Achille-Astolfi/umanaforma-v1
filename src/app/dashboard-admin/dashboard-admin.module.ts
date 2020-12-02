import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';



@NgModule({
  declarations: [DashboardAdminComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardAdminComponent]
})
export class DashboardAdminModule { }
export { DashboardAdminComponent };
