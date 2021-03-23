import { Component, OnInit } from '@angular/core';
import {EvenementService} from '../services/evenement.service';
import {User} from '../models/User.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'hackathon-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  userObservable: Observable<User> = null;
  userData: User = null;

  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userObservable = this.evenementService.getUserData();
  }


}
