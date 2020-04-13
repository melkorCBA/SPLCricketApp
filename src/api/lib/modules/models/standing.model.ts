import mongoose from 'mongoose'
export interface IStanding {
    _id?:mongoose.Types.ObjectId,
    arc?:string,
    logo?: string,
    team?: string,
    pld: number,
    w: number,
    d: number,
    l: number,
    pts: number,
    nr: number,
    tournament?:mongoose.Types.ObjectId

}