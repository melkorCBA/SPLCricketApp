"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_controller_1 = require("./../controllers/match.controller");
const cors = require("cors");
class MatchRoutes {
    constructor() {
        this.matchController = new match_controller_1.MatchController();
    }
    route(app) {
        app.use(cors());
        //Index -show all match data
        app.get("/matches", (req, res) => {
            this.matchController.showMatches(req, res);
        });
        //Create - add a match
        app.post("/matches", (req, res) => {
            console.log("match post route trigerd !!");
            this.matchController.createMatch(req, res);
        });
        //Show -  show match by id
        app.get('/matches/:id', (req, res) => {
            this.matchController.showMatch(req, res);
        });
        //Update -  upadte match by id
        app.put("/matches/:id", (req, res) => {
            // console.log("put routes trigered !!")
            this.matchController.updateMatch(req, res);
        });
        //Delete - delete match by id
        app.delete("/matches", (req, res) => {
            this.matchController.removeStadings(req, res);
        });
    }
}
exports.MatchRoutes = MatchRoutes;
//# sourceMappingURL=match.routes.js.map