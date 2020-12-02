import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { SampleDashboardUserComponent } from './sample-dashboard-user/sample-dashboard-user.component';
import { SampleHomeComponent } from './sample-home/sample-home.component';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleCorsiUserComponent } from './sample-corsi-user/sample-corsi-user.component';
import { SampleCorsiIscrivitiComponent } from './sample-corsi-iscriviti/sample-corsi-iscriviti.component';
import { SampleCorsiGrazieComponent } from './sample-corsi-grazie/sample-corsi-grazie.component';
import { SampleDashboardAdminComponent } from './sample-dashboard-admin/sample-dashboard-admin.component';
import { SampleCorsiAdminComponent } from './sample-corsi-admin/sample-corsi-admin.component';
import { SampleCorsiDettaglioComponent } from './sample-corsi-dettaglio/sample-corsi-dettaglio.component';
import { SampleCandidatiComponent } from './sample-candidati/sample-candidati.component';

@NgModule({
  declarations: [SampleHomeComponent, SampleDashboardUserComponent, SampleCorsiUserComponent, SampleCorsiIscrivitiComponent, SampleCorsiGrazieComponent, SampleDashboardAdminComponent, SampleCorsiAdminComponent, SampleCorsiDettaglioComponent, SampleCandidatiComponent],
  imports: [
    CommonModule, IconsModule, SampleRoutingModule
  ],
  exports: []
})
export class SampleModule { }
