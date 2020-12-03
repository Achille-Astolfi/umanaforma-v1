import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { SampleModule } from './sample/sample.module';
import { SampleHomeComponent } from './sample/sample-home/sample-home.component';
import { FinalHomeModule } from './final-home/final-home.module';
import { FormsModule } from '@angular/forms';
import { FinalDashboardModule } from './final-dashboard/final-dashboard.module';
import { FinalCorsiIscrivitiModule } from './final-corsi-iscriviti/final-corsi-iscriviti.module';
import { FinalCorsiUserModule } from './final-corsi-user/final-corsi-user.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FinalCorsiGrazieModule } from './final-corsi-grazie/final-corsi-grazie.module';
import { FinalCorsiAdminModule } from './final-corsi-admin/final-corsi-admin.module';
import { FinalCorsiDettaglioModule } from './final-corsi-dettaglio/final-corsi-dettaglio.module';
import { FinalCandidatiModule } from './final-candidati/final-candidati.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    IconsModule,
    SampleModule,
    FinalHomeModule,
    AppRoutingModule,
    FormsModule,
    FinalDashboardModule,
    FinalCorsiIscrivitiModule,
    FinalCorsiUserModule,
    FinalCorsiGrazieModule,
    FinalCorsiAdminModule,
    FinalCorsiDettaglioModule,
    FinalCandidatiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
