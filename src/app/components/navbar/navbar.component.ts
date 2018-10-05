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
  public userId: string;

  constructor(
    public authentication: AuthenticationService
    ) { }

  ngOnInit() {
    this.authentication.stateAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.emailUser = auth.email;
        this.userId = auth.uid;
        if (!auth.displayName && !auth.photoURL) {
          this.nameUser = 'User';
          this.photoUser = 'https://raw.githubusercontent.com/marelywoody/cdmx-social-network-frameworks/master/src/assets/images/icono.png';
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
