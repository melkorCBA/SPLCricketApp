"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const standing_route_1 = require("../routes/standing.route");
class App {
    constructor() {
        this.mongoURL = "mongodb://localhost/SPL";
        this.userRoutes = new standing_route_1.StandingRoutes();
        this.app = express();
        this.mongoSetup();
        this.config();
        this.userRoutes.route(this.app);
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