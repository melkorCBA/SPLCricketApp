import mongoose from 'mongoose'

export interface IStanding {
    _id?:mongoose.Types.ObjectId
    arc?:string,
    logo?: string,
    team?: string,
    pld: number,
    w: number,
    d: number,
    l: number,
    pts: number,
    nr: number

}

export interface IMatch {


    matchNo: number,
    team1: {
        id: number,
        name: string,
        innings: number,
        toss: boolean,
        score: number,
        overs: number,
        wickets: number
    },
    team2: {
        id: number,
        name: string,
        innings: number,
        toss: boolean,
        score: number,
        overs: number,
        wickets: number
    },
    win: {
        team: string,
        des: {
            wickets: number,
            runs: number
        }
    }




}

export interface ITeam {
    id:number,
    name:String,
    arc:String,
    players:string[],
    scored:{
        runs:number,
        overs:number
    },
    conceded:{
        runs:number,
        overs:number
    },

    performance:{
        pld:number,
        win:number,
        loss:number,
        draw:number
    }

    matchesPlayed:number[]

}
