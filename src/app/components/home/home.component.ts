import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
    ) { }

  ngOnInit() {
  }
  // METODOS

  registerUser() {
    this.authenticationService.register(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/postWall']);
    }).catch((err) => {
      console.log(err);
    });
  }

}
