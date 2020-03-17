
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IStanding } from '../../shared/interfaces';

@Injectable()
export class StandingsSortService {

    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }

    //observable is asynchronize opration reactive extention javascript 
    SortStandings(collection:IStanding[]):IStanding[]{
        console.log(collection)
       return collection.sort((a,b)=>
            (b.pts*1000+b.nr)-(a.pts*1000+a.nr)
        )
    }
    


}