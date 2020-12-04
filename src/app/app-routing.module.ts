import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.module';
import { HomeComponent } from './application/home.module';
import { CandidatesComponent } from './candidates/candidates.module';
import { CorsiGrazieComponent } from './corsi-grazie/corsi-grazie.module';
import { CoursesDetailComponent } from './courses-detail/courses-detail.module';
import { CoursesComponent } from './courses/courses.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.module';
import { TypeLoggedUserGuard } from './guard/type-logged-user.guard';
import { NotFoundComponent } from './not-found/not-found.module';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dashboard-user", component: DashboardUserComponent, canActivate: [TypeLoggedUserGuard] },
  { path: "dashboard-admin", component: DashboardAdminComponent, canActivate: [TypeLoggedUserGuard] },
  { path: "course-list", component: CoursesComponent },
  { path: "add-candidate", component: AddCandidateComponent },
  { path: "corsi-grazie", component: CorsiGrazieComponent },
  { path: "corsi-dettaglio", component: CoursesDetailComponent },
  { path: "candidates", component: CandidatesComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "**", pathMatch: "prefix", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
