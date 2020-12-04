import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatiDettaglioComponent } from './candidati-dettaglio/candidati-dettaglio/candidati-dettaglio.component';
import { CandidatiComponent } from './candidati/candidati.module';
import { CorsiAdminComponent, CorsiAdminModule } from './corsi-admin/corsi-admin.module';
import { CorsiDettaglioComponent } from './corsi-dettaglio/corsi-dettaglio/corsi-dettaglio.component';
import { CorsiGrazieComponent } from './corsi-grazie/corsi-grazie.module';
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
  { path: 'corsi-grazie', component: CorsiGrazieComponent, canActivate: [UserGuard]},
  { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AdminGuard]},
  { path: 'corsi-admin', component: CorsiAdminComponent, canActivate: [AdminGuard]},
  { path: 'corsi-dettaglio', component: CorsiDettaglioComponent, canActivate: [AdminGuard]},
  { path: 'candidati', component: CandidatiComponent, canActivate: [AdminGuard]},
  { path: 'candidati-dettaglio', component: CandidatiDettaglioComponent, canActivate: [AdminGuard]},

  {path: "", pathMatch: "full", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
