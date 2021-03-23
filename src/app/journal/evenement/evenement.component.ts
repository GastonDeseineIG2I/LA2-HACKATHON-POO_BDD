import { Component, OnInit } from '@angular/core';
import {Evenement} from '../models/evenement.model';

@Component({
  selector: 'hackathon-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {


  evenement: Evenement = {
    date: '2021-03-23',
    categorie: { idCategorie: '1', libCategorie: 'Sport'},
    champs: [
      {nomChamp: 'Sujet', nature: 'input', saisie: { valeur: 'Premier test', dateDerniereModification: '2021-03-23'}},
      {nomChamp: 'Description', nature: 'text', saisie: { valeur: 'Premiere description', dateDerniereModification: '2021-03-23'}},
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
