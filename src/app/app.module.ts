import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { SampleModule } from './sample/sample.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { DashboardUserModule } from './dashboard-user/dashboard-user.module';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
import { CorsiUserModule } from './corsi-user/corsi-user.module';
import { CorsiIscrivitiModule } from './corsi-iscriviti/corsi-iscriviti.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CorsiGrazieModule } from './corsi-grazie/corsi-grazie.module';
import { FooterComponent } from './footer/footer.component';
import { CorsiAdminModule } from './corsi-admin/corsi-admin.module';
import { CorsiDettaglioModule } from './corsi-dettaglio/corsi-dettaglio.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
    RouterModule,
    HomeModule,
    DashboardUserModule,
    CorsiUserModule,
    CorsiIscrivitiModule,
    CorsiGrazieModule,
    DashboardAdminModule,
    CorsiAdminModule,
    CorsiDettaglioModule,
    SampleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
