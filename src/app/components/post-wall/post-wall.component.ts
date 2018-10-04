import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-post-wall',
  templateUrl: './post-wall.component.html',
  styleUrls: ['./post-wall.component.css']
})
export class PostWallComponent implements OnInit {

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
        this.nameUser = auth.displayName;
        this.emailUser = auth.email;
        this.photoUser = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }

}
