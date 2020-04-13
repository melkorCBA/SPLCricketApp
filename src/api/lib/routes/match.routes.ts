import { MatchController } from './../controllers/match.controller';
import {Application, Request, Response, Router} from 'express'
import * as cors from 'cors'




export class MatchRoutes {
    private matchController=new MatchController()

     
    route(app:Application){
        let router=Router()
        app.use(cors()) 
        app.use('/tournaments', router)     
    
        //Index -show all match data
        router.get("/:tournament_id/matches",(req:Request, res:Response)=>{
            this.matchController.showMatches(req,res)
        })
        //Create - add a match
        router.post("/:tournament_id/matches",(req:Request, res:Response)=>{
            console.log("match post route trigerd !!")
            this.matchController.createMatch(req,res)
        })
        //Show -  show match by id
        router.get('/matches/:id',(req:Request, res:Response)=>{
            this.matchController.showMatch(req,res)
        })

        //Update -  upadte match by id
        router.put("/matches/:id",(req:Request, res:Response)=>{
           // console.log("put routes trigered !!")
            this.matchController.updateMatch(req,res)
        })
        //Delete - delete match by id
        router.delete("/matches",(req:Request, res:Response)=>{
            this.matchController.removeStadings(req,res)
        })

    }
}