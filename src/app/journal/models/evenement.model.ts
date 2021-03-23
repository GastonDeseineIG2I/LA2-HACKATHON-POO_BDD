import {Champ} from './champ.model';
import {Categorie} from './categorie.model';

export interface Evenement {
  date: string;
  categorie: Categorie;
  champs: Champ[];
}
