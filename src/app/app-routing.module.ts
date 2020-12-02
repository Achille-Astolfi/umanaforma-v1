import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.module';
import { HomeComponent } from './home/home.module';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dashboard-user", component: DashboardUserComponent },
  { path: "dashboard-admin", component: DashboardAdminComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
