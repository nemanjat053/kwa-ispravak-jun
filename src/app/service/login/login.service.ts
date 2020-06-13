import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private user: User;
  private token = null;

  login(user) {
    return this.http.post('http://localhost:8080/api/login', user).pipe((r) => {
      r.subscribe((t) => {
        this.token = t['token'];
        this.user = JSON.parse(atob(t['token'].split('.')[1]));
      });
      return r;
    });
  }

  validateRoles(roles) {
    if (this.user) {
      let userRoles = new Set(this.user['roles']);
      let matchedRoles = roles.filter((r) => userRoles.has(r));
      if (matchedRoles.length > 0) {
        return true;
      }
    }
    return false;
  }

  getToken() {
    if (!this.user) {
      return '';
    }
    return this.token;
  }
}
