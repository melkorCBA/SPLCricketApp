"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const standing_controller_1 = require("./../controllers/standing.controller");
class StandingRoutes {
    constructor() {
        this.standingController = new standing_controller_1.StandingController();
    }
    route(app) {
        // var corsOptions = {
        //     origin: 'lhttp://localhost:3000/',
        //     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        //   }
        //app.options('*',cors(corsOptions))
        //'Access-Control-Allow-Origin','*')
        //res.header('Access-Control-Allow-Origin',"Origin, X-Requested-with, Content-Type, Accept")
        app.use(cors());
        //Index -show all standing data
        app.get("/standings", (req, res) => {
            this.standingController.showStandings(req, res);
        });
        //Create - full standing table
        app.post("/standings", (req, res) => {
            this.standingController.createStandings(req, res);
        });
        //Show -  not using
        //Update -  upadte complete standing table
        app.put("/standings/:id", (req, res) => {
            console.log("put routes trigered !!");
            this.standingController.updateStanding(req, res);
        });
        //Delete - delete complete standing table
        app.delete("/standings", (req, res) => {
            this.standingController.removeStadings(req, res);
        });
    }
}
exports.StandingRoutes = StandingRoutes;
//# sourceMappingURL=standing.route.js.map