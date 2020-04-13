"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
});
exports.default = mongoose.model('tournament', schema);
//# sourceMappingURL=tournament.schema.js.map