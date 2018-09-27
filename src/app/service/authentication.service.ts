import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public fireAuth: AngularFireAuth) { }

//METODOS



  logout(){
    // utilizamos signout de AngularFireAuth(fireAuth)
    return this.fireAuth.auth.signOut();
  }
}
