import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DashboardUserComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    DashboardUserComponent
  ]
})
export class DashboardUserModule { }
export {DashboardUserComponent}
