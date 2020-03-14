import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StandingRecordComponent } from './standing-record/standing-record.component';
import { StandingTableComponent } from './/standing-table.component';

@NgModule({
    imports:[CommonModule],
    declarations:[StandingTableComponent, StandingRecordComponent],
    exports:[StandingTableComponent]
})

export class StadingTableModule{}