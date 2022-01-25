import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {User} from '../admin/user/user';
import {Observable} from 'rxjs';
import {UserResponse} from './userResponse';

import { UserService } from '../admin/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private userSrevice: UserService) {
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getUser(): User | null {
    if (this.isLoggedIn()){
      return {
        userId : parseInt(localStorage.getItem('gebruikerId') ?? '0'),
        location : {},
        email: localStorage.getItem('email') ?? '',
        password: '',
        firstname: '',
        lastname: '',
        birthdate: '',
        username:''
        // token: this.getToken()  };
      }
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(username: string, password: string): Observable<Object> {

    //const result = this.httpClient.post('http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/users/login/?user_name=', username + '&password=' + password);
    const result = this.httpClient.post('http://java-rest-api-c3po.westeurope.cloudapp.azure.com:8080/api/users/login/?user_name='+ username + '&password=' + password, username + password );
    return result;
  }

  // register(user: User): Observable<UserResponse> {
  //   return this.httpClient.post<UserResponse>('http://localhost:3000/register', user);
  // }
}
