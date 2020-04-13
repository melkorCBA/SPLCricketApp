import * as mongoose from 'mongoose'
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,

    },

    matches: [{
        team: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "match"
        }




    }],

    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "team"
    },],

    standing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "standing"
    }



})

export default mongoose.model('tournament', schema)


