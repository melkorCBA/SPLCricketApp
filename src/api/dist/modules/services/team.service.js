"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const team_schema_1 = require("../schemas/team.schema");
class TeamServices {
    //add one entry to team collection
    createteam(team_details, callback) {
        const team = new team_schema_1.default();
        //create a instance of the model
        //let cmatch= JSON.stringify(match_details)
        team.collection.insertOne(team_details, callback);
    }
    //show all in the teams collection
    showTeams(callback) {
        team_schema_1.default.find(callback);
    }
    //show by id  from the team collection
    showTeam(id, callback) {
        team_schema_1.default.findById(id, callback);
    }
    //update one entry in the team collection
    updateTeam(team_id, update_query, callback) {
        team_schema_1.default.findByIdAndUpdate(team_id, update_query, callback);
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
    deleteTeam(team_id, callback) {
        team_schema_1.default.findByIdAndDelete(team_id, callback);
    }
}
exports.TeamServices = TeamServices;
//# sourceMappingURL=team.service.js.map