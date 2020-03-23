import { ITeam } from './../models/team.model';
import teams from '../schemas/team.schema'



export class TeamServices {
    //add one entry to team collection
    public createteam(team_details: ITeam, callback: Function) {
        const team = new teams();

        //create a instance of the model
        //let cmatch= JSON.stringify(match_details)

        team.collection.insertOne(team_details, callback);
    }

    //show all in the teams collection
    public showTeams(callback: Function) {
        teams.find(callback);

    }

    //show by id  from the team collection
    public showTeam(id: String, callback: Function) {
        teams.findById(id, callback);

    }


    //update one entry in the team collection
    public updateTeam(team_id: String, update_query: ITeam, callback: Function) {
        teams.findByIdAndUpdate(team_id, update_query, callback);
    }

    // public updatedTeamFromMatch(Teams: ITeam[], callback: Function) {
    
        
    //     query1:{
    //         $inc: team1: {
    //             scored: {
    //                 runs:  Teams[0].scored.runs
    //                 overs: Teams[0].scored.runs
    //             }
    //             conceded: {
    //                 runs:  Teams[1].scored.runs
    //                 overs: Teams[1].scored.runs
    //             }
    //             performance: {
    //                 pld: Teams[0].performance.pld
    //                 win: Teams[0].performance.win
    //                 loss: Teams[0].performance.loss
    //                 draw: Teams[0].performance.draw
    //             }
    //         }

    //     }

    //     query2:{
    //         $inc: team1: {
    //             scored: {
    //                 runs:  Teams[1].scored.runs
    //                 overs: Teams[1].scored.runs
    //             }
    //             conceded: {
    //                 runs:  Teams[1].scored.runs
    //                 overs: Teams[1].scored.runs
    //             }
    //             performance: {
    //                 pld: Teams[1].performance.pld
    //                 win: Teams[1].performance.win
    //                 loss: Teams[1].performance.loss
    //                 draw: Teams[1].performance.draw
    //             }
    //         }

    //     }
    //     //teams.findByIdAndUpdate(Teams[0].id,{query1}, callback)
        

        
    // }




    //delete one entry in the team collection
    public deleteTeam(team_id: String, callback: Function) {
        teams.findByIdAndDelete(team_id, callback);
    }


}
