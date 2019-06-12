import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  // --------------------------------------------------
  //                     PROPERTIES
  // --------------------------------------------------


  title = 'PronoFoot';



  // --------------------------------------------------
  //                     CONSTRUCTOR
  // --------------------------------------------------


  constructor(
  ) { }



  // --------------------------------------------------
  //                     METHODS
  // --------------------------------------------------

  /**
   * On init, set locale to France and check if user is authentificated.
   */
  ngOnInit() {
  }
}
