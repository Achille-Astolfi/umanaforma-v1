import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './application/home.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.module';
import { TypeLoggedUserGuard } from './guard/type-logged-user.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "dashboard-user", component: DashboardUserComponent, canActivate: [TypeLoggedUserGuard]},
  {path: "dashboard-admin", component: DashboardAdminComponent, canActivate: [TypeLoggedUserGuard]},
  {path: "", pathMatch: "full", redirectTo:"/home"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
