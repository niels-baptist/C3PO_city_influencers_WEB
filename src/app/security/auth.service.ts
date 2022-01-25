import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  // getUser(): User | null {
  //   if (this.isLoggedIn()){
  //     return {
  //       userId : parseInt(localStorage.getItem('gebruikerId') ?? '0'),
  //       location : 0,
  //       email: localStorage.getItem('email') ?? '',
  //       password: '',
  //       firstname: '',
  //       lastname: '',
  //       birthdate: '',
  //       username:''
  //       // token: this.getToken()  };
  //     }
  //   } else {
  //     return null;
  //   }
  // }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // authenticate(username: string, password: string): Observable<UserResponse> {
  //   // const user_from_api = this.httpClient.get<UserResponse>('http://localhost:8053/users/username', user_from_user.username)

  //   user_from_api = this.userSrevice.getUserByUserName(username)
  //   if(user_from_api.password == password)
  //   {
  //     return user_from_api;
  //   }
  // }

  // register(user: User): Observable<UserResponse> {
  //   return this.httpClient.post<UserResponse>('http://localhost:3000/register', user);
  // }
}
