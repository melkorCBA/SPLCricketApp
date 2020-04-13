import { TournamentServices } from './../modules/services/tournament.service';
import { ITournament } from './../modules/models/tournament.model';

import { Request, Response } from 'express'

export class TournamentController {
    private tournamentService = new TournamentServices()


    public showTournaments(req: Request, res: Response) {
        this.tournamentService.showTournaments((err: any, tournaments: ITournament[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ tournaments: tournaments })
            }
        })
    }

    public showtournament(req: Request, res: Response) {
        this.tournamentService.showTournament(req.params.id, (err: any, tournaments: ITournament[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ tournaments: tournaments })
            }
        })
    }

    public createTournament(req: Request, res: Response) {

        let tournament: ITournament = req.body.tournament
        this.tournamentService.createTournament(tournament, (err: any, createdObject: Object) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
                console.log(err)
            }
            else {
                res.status(200).json({ createdObject })
            }
        })
    }


    public updateTournament(req: Request, res: Response) {

        let tournament: ITournament = {
            name: req.body.name

        }
        
        let id: String = req.params.id
    
        this.tournamentService.updateTournament(id, tournament, (err: any, UpdatedUser: ITournament) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ UpdatedUser })
            }
        })

    }

    public removeTournament(req: Request, res: Response) {
        this.tournamentService.deleteTournament(req.params.id,(err,deletedUser:ITournament)=>{
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({deletedUser})
            }
        })

    }
}