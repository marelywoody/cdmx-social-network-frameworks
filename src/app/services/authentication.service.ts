import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public auth: AngularFireAuth) { }

// METODOS PARA EL REGISTRO E INICIO DE SESIÓN
  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  login(email:string, password: string) {
    return new Promise((resolve,reject) => {
      this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }
  
  loginGoogle() {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  loginFacebook() {
    return this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  stateAuth() {
    return this.auth.authState.pipe(map(auth => auth));
  }

  logout() {
    return this.auth.auth.signOut();
  }
}
