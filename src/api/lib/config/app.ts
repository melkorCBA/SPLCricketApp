import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import {StandingRoutes} from '../routes/standing.route'
import { TeamRoutes } from './../routes/team.routes';
import { MatchRoutes } from './../routes/match.routes';

class App {

    public app: express.Application;
    public mongoURL: string="mongodb://localhost/SPL"
    private standingRoutes=new StandingRoutes()
    private matchRoutes=new MatchRoutes()
    private teamRoutes=new TeamRoutes()

    constructor() {
        this.app = express();
        this.mongoSetup();
        this.config(); 
        this.standingRoutes.route(this.app)  
        this.matchRoutes.route(this.app)
        this.teamRoutes.route(this.app)
                
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(){
        mongoose.Promise=global.Promise;
        mongoose.connect(this.mongoURL,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
    }

}

export default new App().app;