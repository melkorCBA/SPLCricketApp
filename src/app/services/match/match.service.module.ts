import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchDataService } from './match.data.service';


@NgModule({

  imports: [
    CommonModule
  ],
  providers:[MatchDataService]
})
export class MatchServiceModule { }
