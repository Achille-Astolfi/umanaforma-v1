import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { HttpClientModule } from '@angular/common/http';
//import { SampleModule } from './sample/sample.module';
//import { HomeComponent } from './application/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    IconsModule,
    HttpClientModule,
    //SampleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
