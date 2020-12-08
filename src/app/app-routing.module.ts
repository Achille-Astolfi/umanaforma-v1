import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.module';
import { HomeComponent } from './application/home.module';
import { CandidateCourseSubscribedComponent } from './candidate-course-subscribed/candidate-course-subscribed.module';
import { CandidatesComponent } from './candidates/candidates.module';
import { CorsiGrazieComponent } from './corsi-grazie/corsi-grazie.module';
import { CoursesDetailComponent } from './courses-detail/courses-detail.module';
import { CoursesComponent } from './courses/courses.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.module';
import { ForbiddenComponent } from './forbidden/forbidden.module';
import { GatewayTimeoutComponent } from './gateway-timeout/gateway-timeout.module';
import { IsLoggedGuard } from './guard/is-logged.guard';
import { TypeLoggedAdminGuard } from './guard/type-logged-admin.guard';
import { TypeLoggedUserGuard } from './guard/type-logged-user.guard';
import { NotFoundComponent } from './not-found/not-found.module';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dashboard-user", component: DashboardUserComponent, canActivate: [TypeLoggedUserGuard] },
  { path: "dashboard-admin", component: DashboardAdminComponent, canActivate: [TypeLoggedAdminGuard] },
  { path: "course-list", component: CoursesComponent, canActivate: [IsLoggedGuard] },
  { path: "add-candidate", component: AddCandidateComponent, canActivate: [TypeLoggedUserGuard] },
  { path: "corsi-grazie", component: CorsiGrazieComponent, canActivate: [TypeLoggedUserGuard] },
  { path: "corsi-dettaglio", component: CoursesDetailComponent, canActivate: [TypeLoggedAdminGuard] },
  { path: "candidates", component: CandidatesComponent, canActivate: [TypeLoggedAdminGuard] },
  { path: "candidate-courses", component: CandidateCourseSubscribedComponent, canActivate: [TypeLoggedAdminGuard] },
  { path: "forbidden", component: ForbiddenComponent },
  { path: "gateway-timeout", component: GatewayTimeoutComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "**", pathMatch: "prefix", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
