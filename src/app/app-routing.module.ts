import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.module';
import { HomeComponent } from './application/home.module';
import { CoursesComponent } from './courses/courses.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.module';
import { TypeLoggedUserGuard } from './guard/type-logged-user.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "dashboard-user", component: DashboardUserComponent, canActivate: [TypeLoggedUserGuard]},
  {path: "dashboard-admin", component: DashboardAdminComponent, canActivate: [TypeLoggedUserGuard]},
  {path: "course-list", component: CoursesComponent},
  {path: "add-candidate", component: AddCandidateComponent},
  {path: "", pathMatch: "full", redirectTo:"/home"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
