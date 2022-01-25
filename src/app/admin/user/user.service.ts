import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3000/users");
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>("http://localhost:3000/users/" + id);
  }

  // getUserByEmail(userName: string): Observable<User> {
  //   return this.httpClient.get<User>("http://localhost:3000/users/" + userName);
  // }

  checkCredentials(userName: string, password:string): Observable<Boolean>{
    return this.httpClient.get<Boolean>("http://localhost:8053/users/login/?user_name=" + userName + "&password=" + password);
  }
}
