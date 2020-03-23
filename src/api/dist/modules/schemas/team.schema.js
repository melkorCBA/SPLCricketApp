"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
exports.default = mongoose.model('team', schema);
//# sourceMappingURL=team.schema.js.map