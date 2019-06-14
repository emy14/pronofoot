import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { environment } from '../../environments/environment';
import {Match} from '../models/Match';

const urlMatchs = 'matchs';

@Injectable()
export class MatchDataService {



  // --------------------------------------------------
  //                     CONSTRUCTOR
  // --------------------------------------------------


  constructor(private http: HttpClient) {
  }


  // --------------------------------------------------
  //                     METHODS
  // --------------------------------------------------


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
}
