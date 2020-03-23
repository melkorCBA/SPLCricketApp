import { TeamController } from './../controllers/team.controller';
import {Application, Request, Response} from 'express'
import * as cors from 'cors'



export class TeamRoutes {
    private teamController=new TeamController()

     
    route(app:Application){
       
        app.use(cors())  
    
        //Index -show all team data
        app.get("/teams",(req:Request, res:Response)=>{
            console.log("team get route trigerd !!")
            this.teamController.showTeams(req,res)
        })
        //Create - add a team
        app.post("/teams",(req:Request, res:Response)=>{
            this.teamController.createTeam(req,res)
        })
        //Show -  show team by id
        app.get('/teams/:id',(req:Request, res:Response)=>{
            this.teamController.showTeam(req,res)
        })

        //Update -  upadte team by id
        app.put("/teams/:id",(req:Request, res:Response)=>{
           // console.log("put routes trigered !!")
            this.teamController.updateTeam(req,res)
        })
        //Delete - delete team by id
        app.delete("/teams",(req:Request, res:Response)=>{
            this.teamController.removeTeam(req,res)
        })

    }
}