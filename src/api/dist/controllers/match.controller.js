"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
                console.log(req.body);
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
                    let teamHolder;
                    this.matchService.showMatches((err, matches) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            matches.forEach((match) => __awaiter(this, void 0, void 0, function* () {
                                if (team._id == match.team1._id) {
                                    console.log(team._id + " - " + match.team1.name + " - " + match.matchNo);
                                    teamHolder = yield this.mapMatchToTeam('team1', team, match.team1, match.team2, match);
                                }
                                else if (team._id == match.team2._id) {
                                    console.log(team._id + " - " + match.team2.name + " - " + match.matchNo);
                                    teamHolder = yield this.mapMatchToTeam('team2', team, match.team2, match.team1, match);
                                }
                            }));
                        }
                    });
                    this.teamService.updateTeam(team._id, teamHolder, (err, updatedTeam) => {
                        console.log(teamHolder);
                        if (err) {
                            console.log(err);
                        }
                        else {
                        }
                    });
                });
            }
        });
    }
    mapMatchToTeam(teamChoise, team, teamX, teamY, match) {
        return new Promise((resolve, reject) => {
            let teamData = {
                scored: {
                    runs: team.scored.runs + teamX.score,
                    overs: team.scored.overs + teamX.overs
                },
                conceded: {
                    runs: team.conceded.runs + teamY.score,
                    overs: team.conceded.overs + teamY.overs
                },
                performance: {
                    pld: team.performance.pld + 1,
                    win: team.performance.win,
                    loss: team.performance.loss,
                    draw: team.performance.draw
                }
            };
            if (match.win.team == teamChoise) {
                ++teamData.performance.win;
            }
            else if (match.win.team == 'draw') {
                ++teamData.performance.draw;
            }
            else {
                ++teamData.performance.loss;
            }
            resolve(teamData);
        });
    }
    cloneTeamObject(team) {
        return {
            scored: {
                runs: team.scored.runs,
                overs: team.scored.overs
            },
            conceded: {
                runs: team.conceded.runs,
                overs: team.conceded.overs
            },
            performance: {
                pld: team.performance.pld,
                win: team.performance.win,
                loss: team.performance.loss,
                draw: team.performance.draw
            }
        };
    }
}
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map