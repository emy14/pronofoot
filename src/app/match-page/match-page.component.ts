import { Component, OnInit } from '@angular/core';
import {MatchDataService} from '../services/match-data.service';
import {Match} from '../models/Match';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})
export class MatchPageComponent implements OnInit {

  public matchs: Match[] = [];
  public id = '0';
  private interval: number;

  constructor(private route: ActivatedRoute, public matchDataService: MatchDataService) {
  }

  async ngOnInit() {
    this.initialisationData();
  }


  initialisationData() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.matchDataService.getMatchsByTournoi(this.id).subscribe((matches: Match[]) => {
        this.matchs = matches;
      });
    });
  }
}
