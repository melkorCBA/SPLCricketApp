
import { Component, OnInit } from '@angular/core';


interface IFixtures {
  team1: string,
  team2: string,
  winBy: string
}

@Component({
  selector: 'app-dashboard-tournament-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']

})


 

export class FixtureComponent implements OnInit {



  fixtures: IFixtures[] = [
    {
      team1: 'CSK',
      team2: 'KNR',
      winBy: '3 wickets'
    },
    {
      team1: 'CSK',
      team2: 'KNR',
      winBy: '3 wickets'
    },
    {
      team1: 'CSK',
      team2: 'KNR',
      winBy: '3 wickets'
    },
    {
      team1: 'CSK',
      team2: 'KNR',
      winBy: '3 wickets'
    },
    {
      team1: 'CSK',
      team2: 'KNR',
      winBy: '3 wickets'
    },
    {
      team1: 'CSK',
      team2: 'KNR',
      winBy: '3 wickets'
    },
    {
      team1: 'CSK',
      team2: 'KNR',
      winBy: '3 wickets'
    },
    {
      team1: 'CSK',
      team2: 'KNR',
      winBy: '3 wickets'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {

  }





}
