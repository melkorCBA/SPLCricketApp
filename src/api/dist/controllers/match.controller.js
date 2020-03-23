"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const team_service_1 = require("./../modules/services/team.service");
const match_service_1 = require("./../modules/services/match.service");
class MatchController {
    constructor() {
        this.matchService = new match_service_1.MatchServices();
        this.teamService = new team_service_1.TeamServices();
    }
    //public noMatches: number = 0
    showMatches(req, res) {
        this.matchService.showMatches((err, matches) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ matches: matches });
            }
        });
    }
    showMatch(req, res) {
        this.matchService.showMatch(req.params.id, (err, matches) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ standings: matches });
            }
        });
    }
    createMatch(req, res) {
        this.matchService.showMatches((err, matches) => {
            if (err) {
                res.status(400).json({ message: "internal server error from  show matches" });
            }
            else {
                let match = req.body;
                //console.log(req.body)
                this.matchService.createMatch(matches.length, match, (err, createdObject) => {
                    if (err) {
                        res.status(400).json({ message: "internal server error from create matches" });
                        console.log(err);
                    }
                    else {
                        this.upadateTeamScores();
                        res.status(200).json({ createdObject });
                    }
                });
            }
        });
    }
    updateMatch(req, res) {
        let match = {
            matchNo: req.body.matchNo,
            team1: req.body.team1,
            team2: req.body.team2,
            win: req.body.win
        };
        // console.log(standings)
        let id = req.params.id;
        //console.log(req.params.id)
        this.matchService.updateMatch(id, match, (err, UpdatedUser) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ UpdatedUser });
            }
        });
    }
    removeStadings(req, res) {
    }
    upadateTeamScores() {
        this.teamService.showTeams((err, teams) => {
            if (err) {
                console.log(err);
            }
            else {
                teams.forEach((team) => {
                    //console.log(team._id)
                    this.matchService.showMatches((err, matches) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log(matches[1]);
                            matches.forEach((match) => {
                                console.log(team._id + " - " + match.team1._id + " - " + match.team2._id);
                                if (team._id == match.team1._id) {
                                    let teamData = this.mapMatchToTeam('team1', team, match.team1, match);
                                    this.teamService.updateTeam(team._id, teamData, (err, updatedTeam) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            console.log(teamData);
                                        }
                                    });
                                }
                                else if (team._id == match.team2._id) {
                                    console.log(team._id);
                                    let teamData = this.mapMatchToTeam('team2', team, match.team2, match);
                                    this.teamService.updateTeam(team._id, teamData, (err, updatedTeam) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            console.log(teamData);
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    }
    mapMatchToTeam(teamChoise, team, teamX, match) {
        let teamData = {
            scored: {
                runs: 0,
                overs: 0
            },
            conceded: {
                runs: 0,
                overs: 0
            },
            performance: {
                pld: 0,
                win: 0,
                loss: 0,
                draw: 0
            }
        };
        teamData.scored.runs = team.scored.runs + teamX.score;
        teamData.scored.overs = team.scored.overs + teamX.overs;
        teamData.conceded.runs = team.conceded.runs + teamX.score;
        teamData.conceded.overs = team.conceded.overs + teamX.overs;
        teamData.performance.pld = team.performance.pld + 1;
        if (match.win.team === teamChoise) {
            teamData.performance.win = team.performance.win + 1;
        }
        else if (match.win.team === 'draw') {
            teamData.performance.draw = team.performance.draw + 1;
        }
        else {
            teamData.performance.loss = team.performance.loss + 1;
        }
        return teamData;
    }
}
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map