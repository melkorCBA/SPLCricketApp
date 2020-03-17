import { Component, OnInit } from '@angular/core';
import { MatchDataService } from '../services/match/match.data.service';

import { IMatch } from './../shared/interfaces';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  match:IMatch[]=[]

  constructor(private matchDataservice:MatchDataService) { }

  ngOnInit(): void {
    this.matchDataservice.getMatches()
      .subscribe((matches:IMatch[])=>this.match=matches)
  }

}
