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

@NgModule({
  declarations: [
    AppComponent
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
    FinalCorsiUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
