
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { StandingsDataService } from './standing.data.service';
import { StandingsSortService } from './standing.sort.service';

@NgModule({
    imports:[HttpClientModule],
    providers:[StandingsDataService,StandingsSortService]
})

export class StandingServiceModule {}