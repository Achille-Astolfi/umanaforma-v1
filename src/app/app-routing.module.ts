import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorsiIscrivitiComponent } from './corsi-iscriviti/corsi-iscriviti/corsi-iscriviti.component';
import { CorsiUserComponent } from './corsi-user/corsi-user.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user/dashboard-user.component';
import { AdminGuard } from './guard/admin.guard';
import { UserGuard } from './guard/user.guard';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'dashboard-user', component: DashboardUserComponent, canActivate: [UserGuard]},
  { path: 'corsi-user', component: CorsiUserComponent, canActivate: [UserGuard]},
  { path: 'corsi-iscriviti', component: CorsiIscrivitiComponent, canActivate: [UserGuard]},
  { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AdminGuard]},

  {path: "", pathMatch: "full", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
