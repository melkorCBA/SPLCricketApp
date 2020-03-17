import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StadingModule } from './stadings/standing.module';
import { MatchComponent } from './match/match.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
  
  ],
  imports: [
    BrowserModule, StadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
