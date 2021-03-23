import { Component, OnInit } from '@angular/core';
import {Evenement} from '../models/evenement.model';

@Component({
  selector: 'hackathon-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  listCategorie: any;

  //TODO Une fonction qui me retourne les categories
  listChamps: any;
  //TODO Une fonction qui me retourne les champs d'une catégorie


  constructor() { }

  getCategorie(): void{

  }
  ngOnInit(): void {
  }

}
