
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as fs from 'file-system'

import { map, catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { IStanding } from './../../shared/interfaces';


@Injectable()
export class StandingsDataService {

    baseUrl: string = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    //observable is asynchronize opration reactive extention javascript 
    getStandings(): Observable<IStanding[]> {

        return this.http.get<IStanding[]>(this.baseUrl + 'standings')
            .pipe(
                map(res => res['standings']),
                catchError(this.handleError)
            )
    }

    updateStandings(standing: IStanding[]): Observable<any> {
        const httpOption = {
            headers: new HttpHeaders({
                "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
            })
        };
        let json = JSON.stringify(standing)

        return this.http.put<IStanding[]>('standings/', json, httpOption)
            .pipe(
                catchError(this.handleError)
            )
    }

    updateStanding(id:String, standing: IStanding): Observable<any> {
        const httpOption = {
            headers: new HttpHeaders({
                "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
            })
        };
        let json = JSON.stringify(standing)
        //console.log(json)
        console.log(this.baseUrl + 'standings/'+id)
        return this.http.put<IStanding>(this.baseUrl + 'standings/'+id, json,httpOption)
            .pipe(
                catchError(this.handleError)
            )
    }

    addStandings(standing: IStanding): Observable<any> {
        const httpOption = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        };
        let json = JSON.stringify(standing)

        return this.http.post<IStanding>('http://localhost:3000/standing/', json, httpOption)
            .pipe(
                catchError(this.handleError)
            )

    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return throwError(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return throwError(error.message || error);
    }
}