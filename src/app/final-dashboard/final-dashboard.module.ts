import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalDashboardUserComponent } from './final-dashboard-user/final-dashboard-user.component';
import { FinalDashboardAdminComponent } from './final-dashboard-admin/final-dashboard-admin.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FinalDashboardUserComponent, FinalDashboardAdminComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ]
})
export class FinalDashboardModule { }
