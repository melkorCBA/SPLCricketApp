import { IMatch } from './../../shared/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MatchDataService {

    baseUrl: string = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    //observable is asynchronize opration reactive extention javascript 
    getMatches(): Observable<IMatch[]> {
        return this.http.get<IMatch[]>(this.baseUrl + 'matches')
            .pipe(
                map(res => res['matches']),
                catchError(this.handleError)
            )
    }

    postMatch(postQuery:IMatch):Observable<any>{
        return this.http.post<IMatch>(this.baseUrl + 'matches', postQuery)
            .pipe(
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