
import { Team2Component } from './team2/team2.component';
import { Team1Component } from './team1/team1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchComponent } from './match.component';
import { MatchServiceModule } from '../../services/match/match.service.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MatchComponent, Team1Component, Team2Component],
  imports: [
    CommonModule, MatchServiceModule, ReactiveFormsModule, FormsModule
  ],
  exports:[MatchComponent]
})
export class MatchModule { }
