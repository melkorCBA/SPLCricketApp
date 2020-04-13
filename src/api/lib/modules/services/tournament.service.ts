import { ITournament } from './../models/tournament.model';
import tournaments from '../schemas/tournament.schema'



export class TournamentServices {
    //add one entry to tournament collection
    public createTournament(tournament_details: ITournament, callback: Function) {
        const tournament = new tournaments();
        tournament.collection.insertOne(tournament_details, callback);
    }

    //show all in the tournament collection
    public showTournaments(callback: Function) {
        tournaments.find(callback);

    }

    //show by id  from the tournament collection
    public showTournament(id: String, callback: Function) {
        tournaments.findById(id, callback);

    }


    //update one entry in the tournament collection
    public updateTournament(tournament_id: String, update_query: ITournament, callback: Function) {
        tournaments.findByIdAndUpdate(tournament_id, update_query, callback);
    }

    


    //delete one entry in the tournament collection
    public deleteTournament(tournament_id: String, callback: Function) {
        tournaments.findByIdAndDelete(tournament_id, callback);
    }


}
