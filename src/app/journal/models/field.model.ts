import {Input} from './input.model';

export interface Field {
  id: number;
  name: string;
  type: string;
  inputList: Input;
}
