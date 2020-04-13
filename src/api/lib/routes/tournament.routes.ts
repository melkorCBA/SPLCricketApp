import {Application, Request, Response} from 'express'
import * as cors from 'cors'
import { TournamentController } from '../controllers/tournament.controller'



export class TournamentRoutes {
    private tournamentController=new TournamentController()

     
    route(app:Application){
       
        app.use(cors())  
    
        //Index -show all tournament data
        app.get("/tournaments",(req:Request, res:Response)=>{
            console.log("tournament get route trigerd !!")
            this.tournamentController.showTournaments(req,res)
        })
        //Create - add a tournament
        app.post("/tournaments",(req:Request, res:Response)=>{
            this.tournamentController.createTournament(req,res)
        })
        //Show -  show tournament by id
        app.get('/tournaments/:id',(req:Request, res:Response)=>{
            this.tournamentController.showtournament(req,res)
        })

        //Update -  upadte tournament by id
        app.put("/tournaments/:id",(req:Request, res:Response)=>{
           // console.log("put routes trigered !!")
            this.tournamentController.updateTournament(req,res)
        })
        //Delete - delete tournament by id
        app.delete("/tournaments",(req:Request, res:Response)=>{
            this.tournamentController.removeTournament(req,res)
        })

    }
}