import * as mongoose from 'mongoose'
import { type } from 'os';
const Schema = mongoose.Schema;

const schema = new Schema({

    name: { type: String },
    arc: { type: String },
    players: [{ type: String }],
    scored: {
        runs: { type: Number },
        overs: { type: Number }
    },
    conceded: {
        runs: { type: Number },
        overs: { type: Number }
    },

    performance: {
        pld: { type: Number },
        win: { type: Number },
        loss: { type: Number },
        draw: { type: Number }
    },

    matchesPlayed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "match"
    }]

});

export default mongoose.model('team', schema);
