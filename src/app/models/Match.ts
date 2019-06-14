import DateTimeFormat = Intl.DateTimeFormat;
import * as moment from 'moment';
import {Moment} from 'moment';


export class Match {

  /**
   *
   * @param {number} [idMatch] - The id of the match
   * @param {number} [scorePremiereEquipe] - The score of the match
   * @param {number} [scoreDeuxiemeEquipe] - The score of the match
   * @param {number} [temps] - The time of the match
   * @param {DateTimeFormat} [dateDebut] - The date of the match
   * @param {DateTimeFormat} [dateFin] - The date of the match
   * @param {Object} [arbitre] - The arbitre of the match
   * @param {Object} [terrain] - The terrain of the match
   * @param {Object} [premiereEquipe] - The first team
   * @param {Object} [deuxiemeEquipe] - The second team
   * @param {Object} [tournoi] - The tournoi
   */
  constructor(
    public id_match?: number,
    private tournoi?: string,
    public score_premiere_equipe?: number,
    public score_deuxieme_equipe?: number,
    public date_debut?: Moment,
    public date_fin?: Moment,
    public premiereEquipe?: string,
    public deuxiemeEquipe?: string,
    public prono?: string

  ) { }




  /**
   *
   * @param {number} [idMatch] - The id of the match
   * @param {number} [scorePremiereEquipe] - The score of the match
   * @param {number} [scoreDeuxiemeEquipe] - The score of the match
   * @param {number} [temps] - The time of the match
   * @param {DateTimeFormat} [date] - The date of the match
   * @param {Object} [arbitre] - The arbitre of the match
   * @param {Object} [terrain] - The terrain of the match
   * @param {Object} [premiereEquipe] - The first team
   * @param {Object} [deuxiemeEquipe] - The second team
   * @param {Object} [tournoi] - The tournoi
   */
  static mapToMatch(data: any): Match {

    const date_debut =  data.date_debut == null ? null : moment.unix(data.date_debut);
    const date_fin = data.date_fin == null ? null :  moment.unix(data.date_fin);
    var prono;
    if (data.score_deuxieme_equipe > data.score_premiere_equipe) {
      prono = data.deuxiemeEquipe;
    } else if(data.score_deuxieme_equipe < data.score_premiere_equipe){
      prono = data.premiereEquipe;
    } else {
      prono = "Match nul"
    }
    return new Match(data.id_match, data.tournoi, data.score_premiere_equipe, data.score_deuxieme_equipe, date_debut, date_fin,
     data.premiereEquipe, data.deuxiemeEquipe, prono);
  }


}
