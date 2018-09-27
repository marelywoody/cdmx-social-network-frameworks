import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs'
import { Register } from '../register';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(public fireAuth: AngularFireAuth) { }

  //METODOS

  register(email: string, password: string) {
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => { 
      console.log(value);
    })
    .catch(err => {
      console.log(err);
    });
  }

  login(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log(value);
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  logout(){
    // utilizamos signout de AngularFireAuth(fireAuth)
    return this.fireAuth.auth.signOut();
  }
}
