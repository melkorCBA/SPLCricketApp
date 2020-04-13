import { ITournament } from './../modules/models/tournament.model';
import { TeamServices } from './../modules/services/team.service';
import { ITeam } from './../modules/models/team.model';
import { MatchServices } from './../modules/services/match.service';
import { IMatch } from './../modules/models/match.model';
import { Request, Response } from 'express'


export class MatchController {
    private matchService = new MatchServices()
    private teamService = new TeamServices()

    //public noMatches: number = 0

    public showMatches(req: Request, res: Response) {
        let tournamentId=req.params.tournament_id
        this.matchService.showMatches(tournamentId,(err: any, foundedTournament: any) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                
                console.log(foundedTournament)
                res.status(200).json({ matches: foundedTournament.matches})
            }
        })
    }

    public showMatch(req: Request, res: Response) {
        let tournamentID=req.params.tournament_id
        let matchId=req.params.match_id
        this.matchService.showMatch(tournamentID, matchId, (err: any, matches: IMatch[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ standings: matches })
            }
        })
    }

    public createMatch(req: Request, res: Response) {
        let tournamentID=req.params.tournament_id
        this.matchService.showMatches(tournamentID,(err: any, matches: IMatch[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error from  show matches" })
            }
            else {

                let match: IMatch = req.body
                console.log(matches)
                this.matchService.createMatch(tournamentID, matches.length, match, (err: any, createdObject: Object) => {
                    if (err) {
                        res.status(400).json({ message: "internal server error from create matches" })
                        console.log(err)
                    }
                    else {
                        //this.upadateTeamScores()
                        res.status(200).json({ createdObject })
                    }
                })
            }

        })

    }


    public updateMatch(req: Request, res: Response) {

        let match: IMatch = {
            matchNo: req.body.matchNo,
            team1: req.body.team1,
            team2: req.body.team2,
            win: req.body.win

        }
        // console.log(standings)
        let id: String = req.params.id
        //console.log(req.params.id)
        this.matchService.updateMatch(id, match, (err: any, UpdatedUser: IMatch) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ UpdatedUser })
            }
        })

    }

    public removeStadings(req: Request, res: Response) {

    }

    // public upadateTeamScores() {
    //     this.teamService.showTeams((err: any, teams: ITeam[]) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             teams.forEach((team: ITeam) => {
    //                 let teamHolder:ITeam
    //                 this.matchService.showMatches((err: any, matches: IMatch[]) => {
    //                     if (err) {
    //                         console.log(err)
    //                     }
    //                     else {
    //                         matches.forEach(async (match: IMatch) => {
                                
    //                             if (team._id == match.team1._id) {
    //                                 console.log(team._id + " - " + match.team1.name + " - "+ match.matchNo)
    //                                 teamHolder = await this.mapMatchToTeam('team1', team, match.team1, match.team2, match)
    //                             }
    //                             else if (team._id == match.team2._id) {
    //                                 console.log(team._id + " - " + match.team2.name + " - "+ match.matchNo)
    //                                 teamHolder= await this.mapMatchToTeam('team2', team, match.team2, match.team1, match)
    //                             }
    //                         })
    //                     }
    //                 })
    //                 this.teamService.updateTeam(team._id,teamHolder,(err:any,updatedTeam:ITeam)=>{
    //                     console.log(teamHolder)
    //                     if(err){
    //                         console.log(err)
    //                     }
    //                     else{
                            
    //                     }
                        
    //                 })
    //             })
    //         }
    //     })

    // }

    public mapMatchToTeam(teamChoise: string, team: ITeam, teamX: any, teamY: any, match: IMatch): any {
        return new Promise<any>((resolve, reject) => {
            let teamData: ITeam = {
                scored: {
                    runs: team.scored.runs + teamX.score,
                    overs: team.scored.overs + teamX.overs
                },
                conceded: {
                    runs: team.conceded.runs + teamY.score,
                    overs: team.conceded.overs + teamY.overs
                },

                performance: {
                    pld: team.performance.pld + 1,
                    win: team.performance.win,
                    loss: team.performance.loss,
                    draw: team.performance.draw
                }

            }

            if (match.win.team == teamChoise) {
                ++teamData.performance.win


            }
            else if (match.win.team == 'draw') {
                ++teamData.performance.draw
            } else {
                ++teamData.performance.loss

            }
            resolve(teamData)

        })




    }

    public cloneTeamObject(team: ITeam) {
        return {
            scored: {
                runs: team.scored.runs,
                overs: team.scored.overs
            },
            conceded: {
                runs: team.conceded.runs,
                overs: team.conceded.overs
            },

            performance: {
                pld: team.performance.pld,
                win: team.performance.win,
                loss: team.performance.loss,
                draw: team.performance.draw
            }

        }

    }
}