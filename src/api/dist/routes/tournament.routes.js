"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const tournament_controller_1 = require("../controllers/tournament.controller");
class TournamentRoutes {
    constructor() {
        this.tournamentController = new tournament_controller_1.TournamentController();
    }
    route(app) {
        app.use(cors());
        //Index -show all tournament data
        app.get("/tournaments", (req, res) => {
            console.log("tournament get route trigerd !!");
            this.tournamentController.showTournaments(req, res);
        });
        //Create - add a tournament
        app.post("/tournaments", (req, res) => {
            this.tournamentController.createTournament(req, res);
        });
        //Show -  show tournament by id
        app.get('/tournaments/:id', (req, res) => {
            this.tournamentController.showtournament(req, res);
        });
        //Update -  upadte tournament by id
        app.put("/tournaments/:id", (req, res) => {
            // console.log("put routes trigered !!")
            this.tournamentController.updateTournament(req, res);
        });
        //Delete - delete tournament by id
        app.delete("/tournaments", (req, res) => {
            this.tournamentController.removeTournament(req, res);
        });
    }
}
exports.TournamentRoutes = TournamentRoutes;
//# sourceMappingURL=tournament.routes.js.map