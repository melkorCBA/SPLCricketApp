"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standing_service_1 = require("./../modules/services/standing.service");
class StandingController {
    constructor() {
        this.standingService = new standing_service_1.StandingServices();
    }
    showStandings(req, res) {
        this.standingService.showStandings((err, standings) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ standings });
            }
        });
    }
    createStandings(req, res) {
        let standings = req.body.standings;
        this.standingService.createStandings(standings, (err, wiriteResult) => {
            if (err) {
                res.status(400).json({ message: "internal server error" });
            }
            else {
                res.status(200).json({ wiriteResult });
            }
        });
    }
    updateStanding(req, res) {
        let standings = {
            pld: req.body.pld,
            w: req.body.w,
            d: req.body.d,
            l: req.body.l,
            pts: req.body.pts,
            nr: req.body.nr
        };
        // console.log(standings)
        let id = req.params.id;
        //console.log(req.params.id)
        this.standingService.updateStanding(id, standings, (err, UpdatedUser) => {
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
}
exports.StandingController = StandingController;
//# sourceMappingURL=standing.controller.js.map