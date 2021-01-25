import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username;
  public password;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  loginCheck() {
    this.authService.login(this.username, this.password).subscribe(res => {
      if (res) {
        this.router.navigate(['/main']);
      }
    });
  }
}
