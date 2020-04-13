"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tournament_schema_1 = require("../schemas/tournament.schema");
class TournamentServices {
    //add one entry to tournament collection
    createTournament(tournament_details, callback) {
        const tournament = new tournament_schema_1.default();
        tournament.collection.insertOne(tournament_details, callback);
    }
    //show all in the tournament collection
    showTournaments(callback) {
        tournament_schema_1.default.find(callback);
    }
    //show by id  from the tournament collection
    showTournament(id, callback) {
        tournament_schema_1.default.findById(id, callback);
    }
    //update one entry in the tournament collection
    updateTournament(tournament_id, update_query, callback) {
        tournament_schema_1.default.findByIdAndUpdate(tournament_id, update_query, callback);
    }
    //delete one entry in the tournament collection
    deleteTournament(tournament_id, callback) {
        tournament_schema_1.default.findByIdAndDelete(tournament_id, callback);
    }
}
exports.TournamentServices = TournamentServices;
//# sourceMappingURL=tournament.service.js.map