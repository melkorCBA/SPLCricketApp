import * as mongoose from 'mongoose'
const Schema = mongoose.Schema;

const schema=new Schema({

    matchNo: {
        type:Number,
        unique:true
    }
    // ,
    // team1: {
    //     id: {
    //         type:Number},
    //     name: string,
    //     innings: number,
    //     toss: boolean,
    //     score: number,
    //     overs: number,
    //     wickets: number
    // },
    // team2: {
    //     id: number,
    //     name: string,
    //     innings: number,
    //     toss: boolean,
    //     score: number,
    //     overs: number,
    //     wickets: number
    // },
    // win: {
    //     team: string,
    //     des: {
    //         wickets: number,
    //         runs: number
    //     }
    // }

})
