import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EvenementComponent} from './journal/evenement/evenement.component';

const routes: Routes = [
  { path: '', redirectTo: '/evenement', pathMatch: 'full' },
  { path: 'evenement', component: EvenementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
