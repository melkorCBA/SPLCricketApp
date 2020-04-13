"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    arc: { type: String, unique: true },
    logo: { type: String },
    team: { type: String },
    pld: { type: Number },
    w: { type: Number },
    d: { type: Number },
    l: { type: Number },
    pts: { type: Number },
    nr: { type: Number },
    tournaments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tournament"
    }
});
exports.default = mongoose.model('standing', schema);
//# sourceMappingURL=standing.schema.js.map