"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_schema_1 = require("../schemas/match.schema");
class MatchServices {
    //add one entry to match collection
    createMatch(matchNo, match_details, callback) {
        const match = new match_schema_1.default();
        match_details['matchNo'] = matchNo + 1;
        match.collection.insertOne(match_details, callback);
    }
    //show all in the match collection
    showMatches(callback) {
        match_schema_1.default.find(callback);
    }
    //show by id  from the match collection
    showMatch(id, callback) {
        match_schema_1.default.findById(id, callback);
    }
    //update one entry in the match collection
    updateMatch(match_id, update_query, callback) {
        match_schema_1.default.findByIdAndUpdate(match_id, update_query, callback);
    }
    //delete one entry in the standing collection
    deleteMatch(match_id, callback) {
        match_schema_1.default.findByIdAndDelete(match_id, callback);
    }
}
exports.MatchServices = MatchServices;
//# sourceMappingURL=match.service.js.map