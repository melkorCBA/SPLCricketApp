"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const team_service_1 = require("./../modules/services/team.service");
class TeamController {
    constructor() {
        this.teamService = new team_service_1.TeamServices();
    }
    showTeams(req, res) {
        this.teamService.showTeams((err, teams) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ teams: teams });
            }
        });
    }
    showTeam(req, res) {
        this.teamService.showTeam(req.params.id, (err, teams) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ teams: teams });
            }
        });
    }
    createTeam(req, res) {
        let team = req.body.team;
        this.teamService.createteam(team, (err, createdObject) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
                console.log(err);
            }
            else {
                res.status(200).json({ createdObject });
            }
        });
    }
    updateTeam(req, res) {
        let team = {
            name: req.body.name,
            arc: req.body.arc,
            players: req.body.players,
            scored: req.body.socred,
            conceded: req.body.conceded,
            performance: req.body.performance,
            matchesPlayed: req.body.matchesPlayed
        };
        let id = req.params.id;
        this.teamService.updateTeam(id, team, (err, UpdatedUser) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ UpdatedUser });
            }
        });
    }
    removeTeam(req, res) {
        this.teamService.deleteTeam(req.params.id, (err, deletedUser) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ deletedUser });
            }
        });
    }
}
exports.TeamController = TeamController;
//# sourceMappingURL=team.controller.js.map