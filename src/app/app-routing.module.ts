import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EvenementComponent} from './journal/evenement/evenement.component';
import {LoginComponent} from './journal/login/login.component';
import {HistoriqueComponent} from './journal/historique/historique.component';

const routes: Routes = [
  { path: '', redirectTo: '/evenement', pathMatch: 'full' },
  { path: 'evenement', component: EvenementComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
