"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const standing_route_1 = require("../routes/standing.route");
const team_routes_1 = require("./../routes/team.routes");
const match_routes_1 = require("./../routes/match.routes");
const tournament_routes_1 = require("./../routes/tournament.routes");
class App {
    constructor() {
        this.mongoURL = "mongodb://localhost/SPL";
        this.standingRoutes = new standing_route_1.StandingRoutes();
        this.matchRoutes = new match_routes_1.MatchRoutes();
        this.teamRoutes = new team_routes_1.TeamRoutes();
        this.tournamentRoutes = new tournament_routes_1.TournamentRoutes();
        this.app = express();
        this.mongoSetup();
        this.config();
        this.standingRoutes.route(this.app);
        this.matchRoutes.route(this.app);
        this.teamRoutes.route(this.app);
        this.tournamentRoutes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map