import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { environment } from '../../environments/environment';
import {Match} from '../models/Match';
import * as moment from 'moment';

const urlMatchs = 'matchs';

@Injectable()
export class MatchDataService {

  private _channel: any;


  // --------------------------------------------------
  //                     CONSTRUCTOR
  // --------------------------------------------------


  constructor(private http: HttpClient) {
  }


  // --------------------------------------------------
  //                     METHODS
  // --------------------------------------------------


  /**
   * @return employee's channel for the different event available under employee
   */
  getChannel() {
    return this._channel;
  }

  /**
   * Return all matchs from DB
   * @returns {Observable<Match[]>}
   */
  getMatchs(): Observable<Match[]> {
    return this.http.get(environment.urls.baseApiUrl + urlMatchs).pipe(
      map(
        (data: any[]) => {
          const matchs = [];
          data.forEach((match) => {
            matchs.push(Match.mapToMatch(match));
          });
          return matchs;
        }
      )
    );
  }




  /**
   * Return a matchs from DB with its id
   * @param {String} id - The match's id
   * @returns {Observable<Match>}
   */
  getMatch(id: string): Observable<Match> {
    // @ts-ignore
    return this.http.get(environment.urls.baseApiUrl + urlMatchs + '/' + id).pipe(
      map(
        (data: any) => {
          return Match.mapToMatch(data);
        }
      )
    );
  }

  /**
   * Return matchs from DB with
   * @param {String} id - The match's id
   * @returns {Observable<Match>}
   */
  getMatchsByTournoi(idTournoi: string): Observable<Match[]> {
    // @ts-ignore
    return this.http.get(environment.urls.baseApiUrl + urlMatchs + '/tournoi/' + idTournoi).pipe(
      map(
        (data: any[]) => {
          const matchs = [];
          data.forEach((match) => {
            matchs.push(Match.mapToMatch(match));
          });
          return matchs;
        }
      )
    );
  }
}
