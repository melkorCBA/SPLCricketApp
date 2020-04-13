"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_schema_1 = require("../schemas/match.schema");
const tournament_schema_1 = require("../schemas/tournament.schema");
class MatchServices {
    //add one entry to match collection
    createMatch(tournamentID, matchNo, match_details, callback) {
        const match = new match_schema_1.default();
        match_details['matchNo'] = matchNo + 1;
        match_details['tournaments'] = tournamentID;
        match.collection.insertOne(match_details, (err, createdMath) => {
            tournament_schema_1.default.findById(tournamentID, (err, foundedTournament) => {
                foundedTournament.matches.push(match_details);
                foundedTournament.save(callback);
            });
        });
    }
    //show all in the match collection
    showMatches(tournament_id, callback) {
        tournament_schema_1.default.findById(tournament_id).populate("matches.match").exec(callback);
    }
    //show by id  from the match collection
    showMatch(tournament_id, match_id, callback) {
        match_schema_1.default.findById(tournament_id, callback);
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