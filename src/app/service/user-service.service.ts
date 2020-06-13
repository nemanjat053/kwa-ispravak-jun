import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:8080';
  private userPrefix: string = 'users';

  // Get all users
  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/api/' + this.userPrefix);
  }

  // Create one
  public create(user: User): Observable<User> {
    return this.http.post<User>(this.url + '/api/' + this.userPrefix, user);
  }

  // Get one
  public getOne(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/api/' + this.userPrefix + `/${id}`);
  }

  // Delete one
  public delete(id: number): Observable<User> {
    return this.http.delete<User>(
      this.url + '/api/' + this.userPrefix + `/${id}`
    );
  }

  // Update one
  public update(id: number, user: User): Observable<User> {
    return this.http.put<User>(
      this.url + '/api/' + this.userPrefix + '/' + id,
      user
    );
  }
}
