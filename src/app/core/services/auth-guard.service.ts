import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';




@Injectable()

export class AuthGuardService implements CanActivate {


  // --------------------------------------------------
  //                     CONSTRUCTOR
  // --------------------------------------------------


  constructor(
    public router: Router,
  ) { }



  // --------------------------------------------------
  //                     METHODS
  // --------------------------------------------------


  /**
   * Check if a route can be activated based on user's role.
   * @returns {boolean}
   */
  canActivate(): boolean {
    return true;
    //TO DO
  }
}
