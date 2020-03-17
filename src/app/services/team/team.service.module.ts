import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDataService } from './team.data.service.';



@NgModule({

    imports: [
        CommonModule
    ],
    providers: [TeamDataService]
})
export class TeamServiceModule { }
