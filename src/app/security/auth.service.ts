import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../admin/user/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rooturl:string = "https://c3poapi.azurewebsites.net/";

  constructor(private httpClient: HttpClient) {
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
        password: localStorage.getItem('password') ?? '',
        firstname: '',
        lastname: '',
        birthdate: '',
        username: localStorage.getItem('userName') ?? ''
      }
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('password');
    localStorage.removeItem('userName');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('password');
  }

  authenticate(username: string, password: string): Observable<Object> {
    const result = this.httpClient.get(this.rooturl + 'users/login/' + username + '/' + password);
    return result;
  }

  authenticateWithId(username:string, password:string): Observable<Object> {
    //fil variable login with username and password in json format
    const login = {
      "user_username": username,
      "user_password": password
    };
    const result = this.httpClient.post(this.rooturl + 'employees/login/returnsId', login);
    return result;
  }
}
