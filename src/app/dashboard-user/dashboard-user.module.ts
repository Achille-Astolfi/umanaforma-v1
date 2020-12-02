import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';



@NgModule({
  declarations: [DashboardUserComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardUserComponent]
})
export class DashboardUserModule { }
export { DashboardUserComponent };

