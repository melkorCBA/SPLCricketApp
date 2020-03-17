import { StandingsDataService } from './../services/standing/standing.data.service';
import { Component, OnInit } from '@angular/core';

import { TeamDataService } from '../services/team/team.data.service.';
import { ITeam, IStanding } from './../shared/interfaces';

@Component({
  selector: 'app-stadings',
  templateUrl: './stadings.component.html',
  styleUrls: ['./stadings.component.css']
})
export class StadingsComponent implements OnInit {

  team: ITeam[] = []
  standing: IStanding[] = []

  constructor(private teamDataService: TeamDataService, private standingsDataService: StandingsDataService) {
  }

  ngOnInit(): void {
    this.teamDataService.getTeams()
      .subscribe((teams: ITeam[]) => this.team = teams)
    this.standingsDataService.getStandings()
      .subscribe((standings: IStanding[]) => this.standing = standings)
  }

  updateStanding() {

    this.update(this.team, this.standing)
  }

  update(teams: ITeam[], standings: IStanding[]): IStanding[] {
    let newStanding: IStanding
    teams.forEach((team) => {
      standings.forEach((standing) => {
        if (team.arc === standing.arc) {
          newStanding = {
            pld: team.performance.pld,
            w: team.performance.win,
            l: team.performance.loss,
            d: team.performance.draw,
            pts: this.pts(team.performance.win),
            nr: this.netRunRate(team.scored, team.conceded)
          }

          this.standingsDataService.updateStanding(standing._id, newStanding)
            .subscribe((standing)=>{})
          //call upadte one service 
        }
      })
    })
    return standings

  }

  netRunRate(socred: { runs: number, overs: number }, conceded: { runs: number, overs: number }): number {
    return (socred.runs / socred.overs) - (conceded.runs / conceded.overs)
  }

  pts(wins: number, stdPoint: number = 3): number {
    return wins * stdPoint
  }

  temp: {
    "id": 5,
    "arc": "RSK",
    "logo": "url",
    "team": "Royal Super Kings",
    "pld": 2,
    "w": 2,
    "d": 0,
    "l": 0,
    "pts": 4,
    "nr": 0.45
  }
  addStanding() {
    this.standingsDataService.addStandings(this.temp)
      .subscribe((standing: IStanding) => { })
  }
}
