import {Categorie} from './categorie.model';

export interface User {
  id: number;
  login: string;
  password: string;
  categoryList: Categorie[];
}
