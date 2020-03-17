import {Application, Request, Response} from 'express'
import * as cors from 'cors'

import { StandingController } from './../controllers/standing.controller';

export class StandingRoutes {
    private standingController=new StandingController()

     
    route(app:Application){
        // var corsOptions = {
        //     origin: 'lhttp://localhost:3000/',
        //     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        //   }
          //app.options('*',cors(corsOptions))
        
           //'Access-Control-Allow-Origin','*')
            //res.header('Access-Control-Allow-Origin',"Origin, X-Requested-with, Content-Type, Accept")
        app.use(cors())  
    
        //Index -show all standing data
        app.get("/standings",(req:Request, res:Response)=>{
            this.standingController.showStandings(req,res)
        })
        //Create - full standing table
        app.post("/standings",(req:Request, res:Response)=>{
            this.standingController.createStandings(req,res)
        })
        //Show -  not using

        //Update -  upadte complete standing table
        app.put("/standings/:id",(req:Request, res:Response)=>{
            console.log("put routes trigered !!")
            this.standingController.updateStanding(req,res)
        })
        //Delete - delete complete standing table
        app.delete("/standings",(req:Request, res:Response)=>{
            this.standingController.removeStadings(req,res)
        })

    }
}