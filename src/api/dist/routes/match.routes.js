"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_controller_1 = require("./../controllers/match.controller");
const express_1 = require("express");
const cors = require("cors");
class MatchRoutes {
    constructor() {
        this.matchController = new match_controller_1.MatchController();
    }
    route(app) {
        let router = express_1.Router();
        app.use(cors());
        app.use('/tournaments', router);
        //Index -show all match data
        router.get("/:tournament_id/matches", (req, res) => {
            this.matchController.showMatches(req, res);
        });
        //Create - add a match
        router.post("/:tournament_id/matches", (req, res) => {
            console.log("match post route trigerd !!");
            this.matchController.createMatch(req, res);
        });
        //Show -  show match by id
        router.get('/matches/:id', (req, res) => {
            this.matchController.showMatch(req, res);
        });
        //Update -  upadte match by id
        router.put("/matches/:id", (req, res) => {
            // console.log("put routes trigered !!")
            this.matchController.updateMatch(req, res);
        });
        //Delete - delete match by id
        router.delete("/matches", (req, res) => {
            this.matchController.removeStadings(req, res);
        });
    }
}
exports.MatchRoutes = MatchRoutes;
//# sourceMappingURL=match.routes.js.map