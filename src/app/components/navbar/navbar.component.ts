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

  constructor(
    public authentication: AuthenticationService
    ) { }

  ngOnInit() {
    this.authentication.stateAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nameUser = auth.displayName;
        this.emailUser = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }

  clickLogout() {
    this.authentication.logout();
  }
}
