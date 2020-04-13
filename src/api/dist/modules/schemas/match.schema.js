"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    matchNo: {
        type: Number,
        unique: true,
        default: 0
    },
    team1: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "team"
        },
        name: { type: String },
        innings: { type: Number },
        toss: { type: Boolean },
        score: { type: Number },
        overs: { type: Number },
        wickets: { type: Number }
    },
    team2: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "team"
        },
        name: { type: String },
        innings: { type: Number },
        toss: { type: Boolean },
        score: { type: Number },
        overs: { type: Number },
        wickets: { type: Number }
    },
    win: {
        team: {
            type: String,
            des: {
                wickets: { type: Number },
                runs: { type: Number }
            }
        }
    },
    tournaments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tournament"
    }
});
exports.default = mongoose.model('match', schema);
//# sourceMappingURL=match.schema.js.map