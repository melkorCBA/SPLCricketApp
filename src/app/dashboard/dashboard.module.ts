


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { MatchServiceModule } from './../services/match/match.service.module';
import { MatchModule } from './match/match.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, MatchServiceModule, MatchModule , DashboardRoutingModule
  ]
})
export class DashboardModule { }
 