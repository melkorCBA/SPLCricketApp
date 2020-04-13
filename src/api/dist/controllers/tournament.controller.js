"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tournament_service_1 = require("./../modules/services/tournament.service");
class TournamentController {
    constructor() {
        this.tournamentService = new tournament_service_1.TournamentServices();
    }
    showTournaments(req, res) {
        this.tournamentService.showTournaments((err, tournaments) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ tournaments: tournaments });
            }
        });
    }
    showtournament(req, res) {
        this.tournamentService.showTournament(req.params.id, (err, tournaments) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ tournaments: tournaments });
            }
        });
    }
    createTournament(req, res) {
        let tournament = req.body.tournament;
        this.tournamentService.createTournament(tournament, (err, createdObject) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
                console.log(err);
            }
            else {
                res.status(200).json({ createdObject });
            }
        });
    }
    updateTournament(req, res) {
        let tournament = {
            name: req.body.name
        };
        let id = req.params.id;
        this.tournamentService.updateTournament(id, tournament, (err, UpdatedUser) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ UpdatedUser });
            }
        });
    }
    removeTournament(req, res) {
        this.tournamentService.deleteTournament(req.params.id, (err, deletedUser) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ deletedUser });
            }
        });
    }
}
exports.TournamentController = TournamentController;
//# sourceMappingURL=tournament.controller.js.map