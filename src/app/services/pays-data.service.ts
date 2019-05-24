import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { environment } from '../../environments/environment';
import {Pays} from "../models/Pays";

const urlPays = 'pays';

@Injectable()
export class PaysDataService {


  // --------------------------------------------------
  //                     CONSTRUCTOR
  // --------------------------------------------------


  constructor(private http: HttpClient) {
  }


  // --------------------------------------------------
  //                     METHODS
  // --------------------------------------------------


  /**
   * Return all Pays from DB
   * @returns {Observable<Pays[]>}
   */
  getAllPays(): Observable<Pays[]> {
    return this.http.get(environment.urls.baseApiUrl + "all" + urlPays).pipe(
      map(
        (data: any[]) => {
          const paysLisr = [];
          data.forEach((pays) => {
            paysLisr.push(Pays.mapToPays(pays));
          });
          return paysLisr;
        }
      )
    );
  }


  /**
   * Return a Pays from DB with its id
   * @param {String} id - The Pays's id
   * @returns {Observable<Pays>}
   */
  getPays(id: string): Observable<Pays> {
    // @ts-ignore
    return this.http.get(environment.urls.baseApiUrl + urlPays + '/' + id).pipe(
      map(
        (data: any) => {
          return Pays.mapToPays(data);
        }
      )
    );
  }


  /**
   * Add a Pays into DB
   * @param {pays} Pays - The Pays to add
   * @returns {Observable<Pays>}
   */
  addPays(pays: Pays): Observable<Pays>{
    try {
      const body = {
        nom: pays.nom || '',
      };
      return this.http.post(environment.urls.baseApiUrl + urlPays, body).pipe(
        map(
          (data: any) => {
            return Pays.mapToPays(data);
          }
        )
      );
    } catch (err) {
      console.log('%c Error adding Pays ', 'font-weight: bold; color: red', err);
    }
  }



  /**
   * Update a Pays in DB
   * @param {Pays} Pays - The Pays to update
   * @returns {Observable<Pays>}
   */
  updatePays(pays: Pays): Observable<Pays> {
    try {
      const body = {
        nom: pays.nom,
      };

      return this.http.patch(environment.urls.baseApiUrl + urlPays + '/' + pays.idPays, body).pipe(
        map(
          (data: any) => {
            return Pays.mapToPays(data)
          }
        )
      );
    } catch (err) {
      console.log('%c Error updating Pays ', 'font-weight: bold; color: red', err);
    }
  }
}
