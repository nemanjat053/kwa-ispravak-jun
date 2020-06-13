import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {
    id: null,
    username: null,
    password: null,
    roles: null,
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.user).subscribe(
      (r) => console.log('Login Successful.'),
      (err) => {
        console.log('Failed to login');
      }
    );
  }
}
