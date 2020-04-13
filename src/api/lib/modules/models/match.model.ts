import mongoose from 'mongoose'
export interface IMatch {


    matchNo?: number,
    team1: {
        _id: mongoose.Types.ObjectId,
        name: string,
        innings: number,
        toss: boolean,
        score: number,
        overs: number,
        wickets: number
    },
    team2: {
        _id: mongoose.Types.ObjectId,
        name: string,
        innings: number,
        toss: boolean,
        score: number,
        overs: number,
        wickets: number
    },
    win: {
        team?: string,
        id?:number,
        des?: {
            wickets: number,
            runs: number
        }
    },

    tournament?:mongoose.Types.ObjectId




}
