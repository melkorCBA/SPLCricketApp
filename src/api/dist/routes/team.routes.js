"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const team_controller_1 = require("./../controllers/team.controller");
const cors = require("cors");
class TeamRoutes {
    constructor() {
        this.teamController = new team_controller_1.TeamController();
    }
    route(app) {
        app.use(cors());
        //Index -show all team data
        app.get("/teams", (req, res) => {
            console.log("team get route trigerd !!");
            this.teamController.showTeams(req, res);
        });
        //Create - add a team
        app.post("/teams", (req, res) => {
            this.teamController.createTeam(req, res);
        });
        //Show -  show team by id
        app.get('/teams/:id', (req, res) => {
            this.teamController.showTeam(req, res);
        });
        //Update -  upadte team by id
        app.put("/teams/:id", (req, res) => {
            // console.log("put routes trigered !!")
            this.teamController.updateTeam(req, res);
        });
        //Delete - delete team by id
        app.delete("/teams", (req, res) => {
            this.teamController.removeTeam(req, res);
        });
    }
}
exports.TeamRoutes = TeamRoutes;
//# sourceMappingURL=team.routes.js.map