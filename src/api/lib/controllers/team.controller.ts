import { ITeam } from './../modules/models/team.model';
import { TeamServices } from './../modules/services/team.service';
import { Request, Response } from 'express'

export class TeamController {
    private teamService = new TeamServices()


    public showTeams(req: Request, res: Response) {
        this.teamService.showTeams((err: any, teams: ITeam[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ teams: teams })
            }
        })
    }

    public showTeam(req: Request, res: Response) {
        this.teamService.showTeam(req.params.id, (err: any, teams: ITeam[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ teams: teams })
            }
        })
    }

    public createTeam(req: Request, res: Response) {

        let team: ITeam = req.body.team
        this.teamService.createteam(team, (err: any, createdObject: Object) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
                console.log(err)
            }
            else {
                res.status(200).json({ createdObject })
            }
        })
    }


    public updateTeam(req: Request, res: Response) {

        let team: ITeam = {
            name: req.body.name,
            arc: req.body.arc,
            players: req.body.players,
            scored: req.body.socred,
            conceded: req.body.conceded,
            performance: req.body.performance,
            matchesPlayed: req.body.matchesPlayed

        }
        
        let id: String = req.params.id
    
        this.teamService.updateTeam(id, team, (err: any, UpdatedUser: ITeam) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ UpdatedUser })
            }
        })

    }

    public removeTeam(req: Request, res: Response) {
        this.teamService.deleteTeam(req.params.id,(err,deletedUser:ITeam)=>{
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({deletedUser})
            }
        })

    }
}