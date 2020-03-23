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
        this.matchService.showMatches((err: any, matches: IMatch[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ matches: matches })
            }
        })
    }

    public showMatch(req: Request, res: Response) {
        this.matchService.showMatch(req.params.id, (err: any, matches: IMatch[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error" })
            }
            else {
                res.status(200).json({ standings: matches })
            }
        })
    }

    public createMatch(req: Request, res: Response) {
        this.matchService.showMatches((err: any, matches: IMatch[]) => {
            if (err) {
                res.status(400).json({ message: "internal server error from  show matches" })
            }
            else {

                let match: IMatch = req.body
                //console.log(req.body)
                this.matchService.createMatch(matches.length, match, (err: any, createdObject: Object) => {
                    if (err) {
                        res.status(400).json({ message: "internal server error from create matches" })
                        console.log(err)
                    }
                    else {
                        this.upadateTeamScores()
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

    public upadateTeamScores() {
        this.teamService.showTeams((err: any, teams: ITeam[]) => {
            if (err) {
                console.log(err)
            }
            else {
                teams.forEach((team: ITeam) => {
                    //console.log(team._id)
                    this.matchService.showMatches((err: any, matches: IMatch[]) => {
                        if (err) {
                            console.log(err)

                        }
                        else {
                            
                            console.log(matches[1])
                            matches.forEach((match: IMatch) => {
                                console.log(team._id + " - " + match.team1._id + " - "+ match.team2._id)
                                if (team._id == match.team1._id) {
                                    
                                    let teamData = this.mapMatchToTeam('team1', team, match.team1, match)
                                    this.teamService.updateTeam(team._id, teamData, (err: any, updatedTeam: ITeam) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {
                                            console.log(teamData)

                                        }
                                    })

                                }
                                else if (team._id == match.team2._id) {
                                    console.log(team._id)
                                    let teamData = this.mapMatchToTeam('team2', team, match.team2, match)
                                    this.teamService.updateTeam(team._id, teamData, (err: any, updatedTeam: ITeam) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                        else {
                                            console.log(teamData)
                                        }
                                    })
                                }
                                

                            })
                        }
                    })

                })
            }
        })




    }

    public mapMatchToTeam(teamChoise: string, team: ITeam, teamX: any, match: IMatch): any {
        let teamData: ITeam = {
            scored: {
                runs: 0,
                overs: 0
            },
            conceded: {
                runs: 0,
                overs: 0
            },

            performance: {
                pld: 0,
                win: 0,
                loss: 0,
                draw: 0
            }

        }

        teamData.scored.runs = team.scored.runs + teamX.score
        teamData.scored.overs = team.scored.overs + teamX.overs
        teamData.conceded.runs = team.conceded.runs + teamX.score
        teamData.conceded.overs = team.conceded.overs + teamX.overs
        teamData.performance.pld = team.performance.pld + 1
        if (match.win.team == teamChoise) {
            teamData.performance.win = team.performance.win + 1
        }
        else if (match.win.team == 'draw') {
            teamData.performance.draw = team.performance.draw + 1
        } else {
            teamData.performance.loss = team.performance.loss + 1
        }
        return teamData

    }
}