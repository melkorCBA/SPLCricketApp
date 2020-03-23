import { IMatch } from './../models/match.model';
import matches from '../schemas/match.schema'



export class MatchServices{
    //add one entry to match collection
    public  createMatch(matchNo:number, match_details:IMatch, callback:Function){
        const match=new matches();
        match_details['matchNo']= matchNo+1
        match.collection.insertOne(match_details,callback);
    }

    //show all in the match collection
    public showMatches(callback:Function){
        matches.find(callback);

    }

    //show by id  from the match collection
    public showMatch(id:String, callback:Function){
        matches.findById(id, callback);

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
