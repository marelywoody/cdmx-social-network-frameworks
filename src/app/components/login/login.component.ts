import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authentication: AuthenticationService,
    public router: Router
    ) { }

  ngOnInit() {
  }
  // METODOS
  loginUser() {
    this.authentication.login(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/postWall']);
    }).catch((err) => {
      console.log(err);
    });
  }

  loginGoogle() {
    this.authentication.loginGoogle()
    .then((res) => {
      this.router.navigate(['/postWall'])
    }).catch((err) => {
      console.log(err);
    });
  }

  loginFacebook() {
    this.authentication.loginFacebook()
    .then((res) => {
      this.router.navigate(['/postWall']);
    }).catch((err) => {
      console.log(err);
    });
  }
}
