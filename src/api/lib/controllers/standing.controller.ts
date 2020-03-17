import { IStanding } from './../modules/models/standing.model';
import { StandingServices } from './../modules/services/standing.service';
import { Request, Response } from 'express'

export class StandingController {
    private standingService=new StandingServices()

    public showStandings(req:Request, res:Response){
        this.standingService.showStandings((err:any,standings:IStanding[])=>{
            if(err){
                res.status(400).json({message:"internal server error"})
            }
            else{
                res.status(200).json({standings})
            }
        })
    }

    public createStandings(req:Request, res:Response){
        let standings:IStanding[]=req.body.standings
        this.standingService.createStandings(standings,(err:any, wiriteResult:Object)=>{
            if(err){
                res.status(400).json({message:"internal server error"})
            }
            else{
                res.status(200).json({wiriteResult})
            }
        })
    }


    public updateStanding(req:Request, res:Response){
        
        let standings:IStanding={
           
            pld: req.body.pld,
            w: req.body.w,
            d: req.body.d,
            l: req.body.l,
            pts: req.body.pts,
            nr: req.body.nr
        }
       // console.log(standings)
        let id:String=req.params.id
        //console.log(req.params.id)
        this.standingService.updateStanding(id,standings,(err:any,UpdatedUser:IStanding)=>{
            if(err){
                res.status(400).json({message:"internal server error"})
            }
            else{
                res.status(200).json({UpdatedUser})
            }
        })

    }

    public removeStadings(req:Request, res:Response){
        
    }
}