import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public email: string;
  public password :string;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  // METODOS

  registerUser() {
    this.authenticationService.register(this.email, this.password)
    .then((res) => {
      console.log(res);
      console.log('Datos');
    }).catch((err) => {
      console.log(err);
    });
  }

}
