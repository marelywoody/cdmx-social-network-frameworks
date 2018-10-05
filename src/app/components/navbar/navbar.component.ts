import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nameUser: string;
  public emailUser: string;
  public photoUser: string;

  constructor(
    public authentication: AuthenticationService
    ) { }

  ngOnInit() {
    this.authentication.stateAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.emailUser = auth.email;
        if (!auth.displayName && !auth.photoURL) {
          this.nameUser = 'User';
          this.photoUser = '';
        } else {
          this.nameUser = auth.displayName;
          this.photoUser = auth.photoURL;
        }
      } else {
        this.isLogin = false;
      }
    });
  }

  clickLogout() {
    this.authentication.logout();
  }
}
