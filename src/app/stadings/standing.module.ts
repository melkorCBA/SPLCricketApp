import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadingsComponent } from './stadings.component';
import { StadingTableModule } from './standing-table/standing-table.module';
import { StandingServiceModule } from '../services/standing/standing.service.module';
import { TeamServiceModule } from './../services/team/team.service.module';
import { StandingRoutingModule } from './standing-routing.module';



@NgModule({
    declarations:[StadingsComponent],
    imports:[StadingTableModule,StandingServiceModule,TeamServiceModule,CommonModule, StandingRoutingModule],
    exports:[StadingsComponent]
})

export class StadingModule{}