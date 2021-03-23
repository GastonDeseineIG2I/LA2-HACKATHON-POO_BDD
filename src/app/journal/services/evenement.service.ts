import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private evenementUrl ='';
  constructor(private httpClient: HttpClient) { }



}
