import { FixtureComponent } from './fixture/fixture.component';
import { TournamentRoutingModule } from './tournament-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentComponent } from './tournament.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';


@NgModule({
    declarations: [TournamentComponent, FixtureComponent, TournamentListComponent],
    imports: [
      CommonModule , TournamentRoutingModule 
    ]
  })
  export class TournamentModule { }
   