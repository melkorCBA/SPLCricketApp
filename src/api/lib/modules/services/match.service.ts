import { ITournament } from './../models/tournament.model';
import { ITeam } from './../models/team.model';
import { IMatch } from './../models/match.model';
import matches from '../schemas/match.schema'
import tournaments from '../schemas/tournament.schema'



export class MatchServices{
    //add one entry to match collection
    public  createMatch(tournamentID:string, matchNo:number, match_details:IMatch, callback:Function){
        const match=new matches();
        match_details['matchNo']= matchNo+1
        match_details['tournaments']=tournamentID
        match.collection.insertOne(match_details,(err:any, createdMath:IMatch)=>{
            tournaments.findById(tournamentID, (err:any, foundedTournament:any)=>{
                foundedTournament.matches.push(match_details)
                foundedTournament.save(callback) 
            })
        });
    }

    //show all in the match collection
    public showMatches(tournament_id:String,callback:Function){
        tournaments.findById(tournament_id).populate("matches.match").exec(callback)

    }

    //show by id  from the match collection
    public showMatch(tournament_id:String, match_id, callback:Function){
        matches.findById(tournament_id, callback);

    }

  
    //update one entry in the match collection
    public updateMatch(match_id:String, update_query:IMatch, callback:Function){
        matches.findByIdAndUpdate(match_id,update_query,callback);
    }

   

    //delete one entry in the standing collection
    public deleteMatch(match_id:String, callback:Function){
        matches.findByIdAndDelete(match_id, callback);
    }

    
}
