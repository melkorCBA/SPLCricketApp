import { StandingsSortService } from './../../services/standing/standing.sort.service';
import { StandingsDataService } from './../../services/standing/standing.data.service';
import { Component, OnInit } from '@angular/core';

import { IStanding } from './../../shared/interfaces';

@Component({
  selector: 'app-standing-table',
  templateUrl: './standing-table.component.html',
  styleUrls: ['./standing-table.component.css']
})
export class StandingTableComponent implements OnInit {
  standing:IStanding[]=[]
  sortedStanding:IStanding[]=[]

  constructor(private standingsDataService: StandingsDataService, private standingsSortService:StandingsSortService) { 

  }

  ngOnInit(): void {
    this.standingsDataService.getStandings()
      .subscribe((standings:IStanding[])=>this.standing=this.sort(standings))
    
    //console.log(this.standing)
  
  }

  sort(collection:IStanding[]):IStanding[]{
   return this.standingsSortService.SortStandings(collection)
    
  }



}
