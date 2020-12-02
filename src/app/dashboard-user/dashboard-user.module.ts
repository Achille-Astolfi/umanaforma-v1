import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [DashboardUserComponent],
  imports: [
    CommonModule,
    IconsModule
  ]
})
export class DashboardUserModule { }
export {DashboardUserComponent}
