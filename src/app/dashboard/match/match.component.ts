
import { ITeam, IMatch } from './../../shared/interfaces';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TeamDataService } from './../../services/team/team.data.service.';
import { MatchDataService } from 'src/app/services/match/match.data.service';



@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  teams:ITeam[]=[]
  
  matchForm:FormGroup = new FormGroup({
    team1Form:new FormControl(''),
    team2Form:new FormControl(''),
    win:new FormControl('draw')

  })

  constructor(private teamDataService:TeamDataService, private matchDataService:MatchDataService) { }

  ngOnInit(): void {
    this.teamDataService.getTeams()
      .subscribe((teams:ITeam[])=>{
        this.teams=teams
      })
    
  }

  public onSubmit(){
    // if(this.nestedForm.invalid){
    //   return
    // }
    const postData = Object.assign({}, this.matchForm.value);
    postData.team1Form = Object.assign({}, this.matchForm.value.team1Form);
    postData.team2Form = Object.assign({}, this.matchForm.value.team2Form);
    

    let postQuery:IMatch={
      team1:{
        _id:postData.team1Form.team1._id,
        name:postData.team1Form.team1.name,
        innings:postData.team1Form.innings,
        toss:postData.team1Form.toss=="win" ? true:false,
        score:postData.team1Form.score.runs,
        overs:postData.team1Form.score.overs,
        wickets:postData.team1Form.score.wickets,
      },
      team2:{
        _id:postData.team2Form.team2._id,
        name:postData.team2Form.team2.name,
        innings:postData.team2Form.innings,
        toss:postData.team2Form.toss=="win" ? true:false,
        score:postData.team2Form.score.runs,
        overs:postData.team2Form.score.overs,
        wickets:postData.team2Form.score.wickets,
      },
      win:{
        team:postData.win=='team1'? 'team1' : postData.win=='team2' ? 'team2' : 'draw',
       
      }

    }
    this.matchDataService.postMatch(postQuery)
      .subscribe((match)=>{})
    this.matchForm.reset();
    
  
    
  }

}
