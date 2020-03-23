import { MatchController } from './../controllers/match.controller';
import {Application, Request, Response} from 'express'
import * as cors from 'cors'



export class MatchRoutes {
    private matchController=new MatchController()

     
    route(app:Application){
       
        app.use(cors())  
    
        //Index -show all match data
        app.get("/matches",(req:Request, res:Response)=>{
            this.matchController.showMatches(req,res)
        })
        //Create - add a match
        app.post("/matches",(req:Request, res:Response)=>{
            console.log("match post route trigerd !!")
            this.matchController.createMatch(req,res)
        })
        //Show -  show match by id
        app.get('/matches/:id',(req:Request, res:Response)=>{
            this.matchController.showMatch(req,res)
        })

        //Update -  upadte match by id
        app.put("/matches/:id",(req:Request, res:Response)=>{
           // console.log("put routes trigered !!")
            this.matchController.updateMatch(req,res)
        })
        //Delete - delete match by id
        app.delete("/matches",(req:Request, res:Response)=>{
            this.matchController.removeStadings(req,res)
        })

    }
}