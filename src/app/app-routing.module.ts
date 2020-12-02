import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalCorsiIscrivitiComponent } from './final-corsi-iscriviti/final-corsi-iscriviti/final-corsi-iscriviti.component';
import { FinalCorsiUserComponent } from './final-corsi-user/final-corsi-user/final-corsi-user.component';
import { FinalDashboardAdminComponent } from './final-dashboard/final-dashboard-admin/final-dashboard-admin.component';
import { FinalDashboardUserComponent } from './final-dashboard/final-dashboard-user/final-dashboard-user.component';
import { FinalHomeComponent } from './final-home/final-home.module';
import { GuardAdminGuard } from './guard/guard-admin.guard';
import { GuardUserGuard } from './guard/guard-user.guard';

const routes: Routes = [
  { path: "home", component: FinalHomeComponent },
  { path: "home", pathMatch: "prefix", redirectTo: "/home" },
  { path: "dashboard-user", component: FinalDashboardUserComponent, canActivate:[GuardUserGuard] },
  { path: "dashboard-admin", component: FinalDashboardAdminComponent, canActivate:[GuardAdminGuard] },
  { path: "corsi-user", component: FinalCorsiUserComponent, canActivate:[GuardUserGuard] },
  { path: "corsi-iscriviti", component: FinalCorsiIscrivitiComponent, canActivate:[GuardUserGuard] },

  { path: "", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
