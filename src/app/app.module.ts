
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StadingModule } from './stadings/standing.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, StadingModule, AppRoutingModule, DashboardModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
