import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roles } from '../interface/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  private url: string = 'http://localhost:8080';
  private rolesPrefix: string = 'roles';

  // Get all users
  public getAll(): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.url + '/api/' + this.rolesPrefix);
  }

  // Create one
  public create(role: Roles): Observable<Roles> {
    return this.http.post<Roles>(this.url + '/api/' + this.rolesPrefix, role);
  }

  // Get one
  public getOne(id: number): Observable<Roles> {
    return this.http.get<Roles>(this.url + '/api/' + this.rolesPrefix + `/${id}`);
  }

  // Delete one
  public delete(id: number): Observable<Roles> {
    return this.http.delete<Roles>(
      this.url + '/api/' + this.rolesPrefix + `/${id}`
    );
  }

  // Update one
  public update(id: number, role: Roles): Observable<Roles> {
    return this.http.put<Roles>(
      this.url + '/api/' + this.rolesPrefix + '/' + id,
      role
    );
  }
}
