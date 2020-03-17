import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchComponent } from './match.component';
import { MatchServiceModule } from './../services/match/match.service.module';

@NgModule({
  declarations: [MatchComponent],
  imports: [
    CommonModule, MatchServiceModule 
  ]
})
export class MatchModule { }
