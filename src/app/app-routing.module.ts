import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalDashboardAdminComponent } from './final-dashboard/final-dashboard-admin/final-dashboard-admin.component';
import { FinalDashboardUserComponent } from './final-dashboard/final-dashboard-user/final-dashboard-user.component';
import { FinalHomeComponent } from './final-home/final-home.module';

const routes: Routes = [
  { path: "home", component: FinalHomeComponent },
  { path: "dashboard-user", component: FinalDashboardUserComponent },
  { path: "dashboard-admin", component: FinalDashboardAdminComponent },

  { path: "", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
