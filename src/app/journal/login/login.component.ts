import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'hackathon-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(
    // private auth: AuthService,
    private router: Router) {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);
  hidePass = true;
  showIncorrectIdMessage = false;

  ngOnInit(): void {
    // Si deja connecté on le deconnecte
    // this.auth.logout();
  }

  login(): void {
    if ( this.email.value === '' || this.pass.value === '' || this.email.hasError('email') ){
      return;
    }
    // this.auth.login(this.email.value, this.pass.value).subscribe( (loginResponse: LoginResponse) => {
    //   if (this.auth.isLogged()) {
    this.router.navigate(['']);
    //   }else{
    //     this.showIncorrectIdMessage = true;
    //   }
    // });
  }

  register(): void {
    if ( this.email.value === '' || this.pass.value === '' || this.email.hasError('email') ){
      return;
    }
    // this.auth.register(this.email.value, this.pass.value).subscribe( (loginResponse: LoginResponse) => {
    //   if (this.auth.isLogged()) {
    this.router.navigate(['']);
    //   }
    // });
  }

  getErrorMessage( field: string ): string {
    if ( field === 'email'){
      if (this.email.hasError('required')) {
        return 'Vous devez entrer une valeur';
      }
      return this.email.hasError('email') ? 'Format d\'email invalide' : '';
    }else if ( field === 'pass' ){
      if (this.pass.hasError('required')) {
        return 'Vous devez entrer une valeur';
      }
    }else{
      return '';
    }
  }

}
