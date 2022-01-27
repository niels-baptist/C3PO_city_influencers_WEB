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

  rooturl: string = 'http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/';

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.rooturl+ "users");
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.rooturl + "users/" + id);
  }

  checkCredentials(userName: string, password:string): Observable<Boolean>{
    return this.httpClient.get<Boolean>(this.rooturl + "/users/login/?user_name=" + userName + "&password=" + password);
  }
}
