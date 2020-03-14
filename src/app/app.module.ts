import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StadingModule } from './stadings/standing.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule, StadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
