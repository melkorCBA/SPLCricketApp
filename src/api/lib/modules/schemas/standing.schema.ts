import * as mongoose from 'mongoose'
const Schema = mongoose.Schema;

const schema = new Schema({
    arc: { type: String, unique:true },
    logo: { type: String },
    team: { type: String },
    pld: { type: Number },
    w: { type: Number },
    d: { type: Number },
    l: { type: Number },
    pts: { type: Number },
    nr: { type: Number },

});

export default mongoose.model('standing', schema);
