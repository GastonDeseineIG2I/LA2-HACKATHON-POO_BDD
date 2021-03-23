import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenementComponent } from './evenement/evenement.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HistoriqueComponent } from './historique/historique.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [EvenementComponent, LoginComponent, HistoriqueComponent],
    imports: [
        CommonModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule
    ]
})
export class JournalModule { }
