import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleCorsiAdminComponent } from './sample-corsi-admin/sample-corsi-admin.component';
import { SampleCandidatiComponent as SampleCandidatiComponent } from './sample-candidati/sample-candidati.component';
import { SampleCorsiDettaglioComponent } from './sample-corsi-dettaglio/sample-corsi-dettaglio.component';
import { SampleCorsiGrazieComponent } from './sample-corsi-grazie/sample-corsi-grazie.component';
import { SampleCorsiIscrivitiComponent } from './sample-corsi-iscriviti/sample-corsi-iscriviti.component';
import { SampleCorsiUserComponent } from './sample-corsi-user/sample-corsi-user.component';
import { SampleDashboardAdminComponent } from './sample-dashboard-admin/sample-dashboard-admin.component';
import { SampleDashboardUserComponent } from './sample-dashboard-user/sample-dashboard-user.component';
import { SampleHomeComponent } from './sample-home/sample-home.component';

const routes: Routes = [
    { path: "sample-home", component: SampleHomeComponent },
    { path: "sample-dashboard-user", component: SampleDashboardUserComponent },
    { path: "sample-corsi-user", component: SampleCorsiUserComponent },
    { path: "sample-corsi-iscriviti", component: SampleCorsiIscrivitiComponent },
    { path: "sample-corsi-grazie", component: SampleCorsiGrazieComponent },
    { path: "sample-dashboard-admin", component: SampleDashboardAdminComponent },
    { path: "sample-corsi-admin", component: SampleCorsiAdminComponent },
    { path: "sample-corsi-dettaglio", component: SampleCorsiDettaglioComponent },
    { path: "sample-candidati", component: SampleCandidatiComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SampleRoutingModule { }
