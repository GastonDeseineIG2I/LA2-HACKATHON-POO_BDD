import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private evenementUrl = 'http://localhost:8080/users/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


  getUserData(): Observable<any> {
    return this.httpClient.get<any>(this.evenementUrl);
  }


}
