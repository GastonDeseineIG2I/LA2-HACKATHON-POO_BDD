import {Field} from './field.model';

export interface Categorie {
  id: number;
  name: string;
  fieldList: Field[];
}
