import { User } from './../admin/user/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPersonal } from './user-personal';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserPersonalService {
  azure: string =  'https://c3poapi.azurewebsites.net/';
  localhost: string =  'http://localhost:8080/';

  getUsers(): Observable<UserPersonal[]> {
    return this.httpClient.get<UserPersonal[]>(this.azure + 'users');
  }

  deleteUser(userId: number): Observable<UserPersonal> {
    return this.httpClient.delete<UserPersonal>(this.azure + 'users/' + userId);
  }

  getUserById(userId: number): Observable<UserPersonal> {
    return this.httpClient.get<UserPersonal>(this.azure + 'users/id/' + userId);
  }

  postUser(user: UserPersonal): Observable<UserPersonal> {
    return this.httpClient.post<UserPersonal>(this.azure + 'users/register', user);
  }

  putUser(user: UserPersonal): Observable<UserPersonal> {
  return this.httpClient.put<UserPersonal>(this.azure + 'users', user);
}

  publishUser(id: number): Observable<UserPersonal> {
    return this.getUserById(id).pipe(
        switchMap(user => {
          return this.putUser(user);
        })
    );
  }

  constructor(private httpClient: HttpClient) { }
    getPersonalUsers(): Observable<UserPersonal[]> {
      return this.httpClient.get<UserPersonal[]>(this.azure + 'users');
    }
}



