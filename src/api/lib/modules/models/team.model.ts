import mongoose from 'mongoose'
export interface ITeam {
    _id?:mongoose.Types.ObjectId,
    name?:String,
    arc?:String,
    players?:string[],
    scored?:{
        runs:number,
        overs:number
    },
    conceded?:{
        runs:number,
        overs:number
    },

    performance?:{
        pld:number,
        win:number,
        loss:number,
        draw:number
    }

    matchesPlayed?:number[],

    tournament?:mongoose.Types.ObjectId

}
