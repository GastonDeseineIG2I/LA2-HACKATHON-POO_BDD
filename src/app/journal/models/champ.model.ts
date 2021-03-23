import {Saisie} from './saisie.model';

export interface Champ {
  nomChamp: string;
  nature: string;
  saisie: Saisie;
}
