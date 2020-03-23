import { ITeam} from './../../shared/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TeamDataService {

    baseUrl: string = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    //observable is asynchronize opration reactive extention javascript 
    getTeams(): Observable<ITeam[]> {
        return this.http.get<ITeam[]>(this.baseUrl + 'teams')
            .pipe(
                map(res => res['teams']),
                catchError(this.handleError)
            )
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }
}