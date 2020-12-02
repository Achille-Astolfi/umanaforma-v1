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
import { CorsiUserComponent, CorsiUserModule } from './corsi-user/corsi-user.module';
import { CorsiIscrivitiComponent } from './corsi-iscriviti/corsi-iscriviti/corsi-iscriviti.component';
import { CorsiIscrivitiModule } from './corsi-iscriviti/corsi-iscriviti.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
    HomeModule,
    DashboardUserModule,
    DashboardAdminModule,
    CorsiUserModule,
    CorsiIscrivitiModule,
    SampleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
