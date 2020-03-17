import { IStanding } from './../models/standing.model';
import standings from '../schemas/standing.schema'



export class StandingServices{
    //add one entry to standing collection
    public createStandings(standing_details:IStanding[], callback:Function){
        const standing=new standings(); //create a instance of the model
        //console.log(JSON.stringify(standing_details))
        standing.collection.insertMany(standing_details,callback);
    }

    //show all in the standing collection
    public showStandings(callback:Function){
        standings.find(callback);

    }

  
    //update one entry in the standing collection
    public updateStanding(standing_id:String, update_query:IStanding, callback:Function){
        standings.findByIdAndUpdate(standing_id,update_query,callback);
    }

    public updateStandings(standing_id:String, update_query:IStanding, callback:Function){
        standings.findByIdAndUpdate(standing_id,update_query,callback);
    }

    //delete one entry in the standing collection
    public deleteStading(standing_id:String, callback:Function){
        standings.findByIdAndDelete(standing_id, callback);
    }

    public deleteStadings(callback:Function){
        standings.findByIdAndDelete(callback);
    }
}
