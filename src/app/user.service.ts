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

}
