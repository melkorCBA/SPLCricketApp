"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standing_schema_1 = require("../schemas/standing.schema");
class StandingServices {
    //add one entry to standing collection
    createStandings(standing_details, callback) {
        const standing = new standing_schema_1.default(); //create a instance of the model
        //console.log(JSON.stringify(standing_details))
        standing.collection.insertMany(standing_details, callback);
    }
    //show all in the standing collection
    showStandings(callback) {
        standing_schema_1.default.find(callback);
    }
    //update one entry in the standing collection
    updateStanding(standing_id, update_query, callback) {
        standing_schema_1.default.findByIdAndUpdate(standing_id, update_query, callback);
    }
    updateStandings(standing_id, update_query, callback) {
        standing_schema_1.default.findByIdAndUpdate(standing_id, update_query, callback);
    }
    //delete one entry in the standing collection
    deleteStading(standing_id, callback) {
        standing_schema_1.default.findByIdAndDelete(standing_id, callback);
    }
    deleteStadings(callback) {
        standing_schema_1.default.findByIdAndDelete(callback);
    }
}
exports.StandingServices = StandingServices;
//# sourceMappingURL=standing.service.js.map